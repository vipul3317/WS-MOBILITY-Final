import React, { useState } from 'react';
import { Phone, Mail, User, Building, MapPin, DollarSign, Users, FileText, Check, ArrowRight, Upload, Loader2 } from 'lucide-react';
import EvNavbar from '../../components/navbar/evNav';
import { useLocation } from 'react-router-dom';

// Configuration and constants
const FORM_CONFIG = {
  indianStates: [
    'Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh', 'Goa', 'Gujarat', 'Haryana',
    'Himachal Pradesh', 'Jharkhand', 'Karnataka', 'Kerala', 'Madhya Pradesh', 'Maharashtra', 'Manipur',
    'Meghalaya', 'Mizoram', 'Nagaland', 'Odisha', 'Punjab', 'Rajasthan', 'Sikkim', 'Tamil Nadu',
    'Telangana', 'Tripura', 'Uttar Pradesh', 'Uttarakhand', 'West Bengal'
  ],
  businessTypes: [
    { value: 'proprietorship', label: 'Proprietorship' },
    { value: 'partnership', label: 'Partnership' },
    { value: 'private_limited', label: 'Private Limited' },
    { value: 'llp', label: 'Limited Liability Partnership' }
  ],
  areaTiers: [
    { value: 'tier1', label: 'Tier-1 (Metro cities)' },
    { value: 'tier2', label: 'Tier-2 (Major cities)' },
    { value: 'tier3', label: 'Tier-3 (Small towns)' }
  ],
  propertyStatuses: [
    { value: 'owned', label: 'Owned' },
    { value: 'rented', label: 'Rented' },
    { value: 'lease', label: 'Lease' }
  ],
  investmentRanges: [
    { value: '5-10', label: '₹5-10 Lakhs' },
    { value: '10-20', label: '₹10-20 Lakhs' },
    { value: '20-50', label: '₹20-50 Lakhs' },
    { value: '50-100', label: '₹50 Lakhs - 1 Crore' },
    { value: '100+', label: '₹1 Crore+' }
  ],
  investmentSources: [
    { value: 'self', label: 'Self-funded' },
    { value: 'bank_loan', label: 'Bank Loan' },
    { value: 'investor', label: 'Investor' },
    { value: 'mixed', label: 'Mixed (Self + Loan)' }
  ],
  exclusivityOptions: [
    { value: 'yes', label: 'Yes, I\'m open to exclusivity' },
    { value: 'no', label: 'No, I prefer multi-brand approach' }
  ],
  requiredFields: [
    'fullName', 'email', 'age', 'businessType', 'city', 'state', 'pincode',
    'areaType', 'dealershipAddress', 'propertyStatus', 'showroomSize',
    'hasServiceArea', 'hasParkingSpace', 'hasPowerBackup', 'hasChargingStation',
    'investmentCapacity', 'investmentSource', 'meetTargets', 'salesExecutives',
    'technicians', 'trainStaff', 'motivation', 'exclusivity'
  ]
};

const INITIAL_FORM_DATA = {
  fullName: '', phoneNumber: '', email: '', age: '', idProof: null,
  businessType: '', businessName: '', gstNumber: '', hasExperience: '', experienceDetails: '',
  city: '', state: '', pincode: '', areaType: '', dealershipAddress: '', propertyStatus: '',
  showroomSize: '', hasServiceArea: '', hasParkingSpace: '', hasPowerBackup: '', hasChargingStation: '',
  investmentCapacity: '', investmentSource: '', meetTargets: '',
  salesExecutives: '', technicians: '', trainStaff: '',
  motivation: '', exclusivity: '',
  addressProof: null, businessProof: null, propertyLayout: null,
  declaration: false
};

// components which will be used furthet
const InputField = ({ label, type = 'text', value, onChange, placeholder, required = false, ...props }) => (
  <div>
    <label className="block text-sm font-medium text-gray-700 mb-2">
      {label} {required && '*'}
    </label>
    <input
      type={type}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      {...props}
    />
  </div>
);

const SelectField = ({ label, value, onChange, options, placeholder, required = false, ...props }) => (
  <div>
    <label className="block text-sm font-medium text-gray-700 mb-2">
      {label} {required && '*'}
    </label>
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      {...props}
    >
      <option value="">{placeholder}</option>
      {options.map(option => (
        <option key={option.value || option} value={option.value || option}>
          {option.label || option}
        </option>
      ))}
    </select>
  </div>
);

const TextareaField = ({ label, value, onChange, placeholder, required = false, maxLength, ...props }) => (
  <div>
    <label className="block text-sm font-medium text-gray-700 mb-2">
      {label} {required && '*'}
    </label>
    <textarea
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      maxLength={maxLength}
      {...props}
    />
    {maxLength && (
      <p className="text-sm text-gray-500 mt-1">{value.length}/{maxLength} characters</p>
    )}
  </div>
);

const FileUpload = ({ label, onChange, description, required = false }) => (
  <div>
    <label className="block text-sm font-medium text-gray-700 mb-2">
      {label} {required && '*'}
    </label>
    <div className="flex items-center justify-center w-full">
      <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-gray-300 border-dashed rounded-xl cursor-pointer bg-gray-50 hover:bg-gray-100">
        <div className="flex flex-col items-center justify-center pt-5 pb-6">
          <Upload className="w-6 h-6 mb-2 text-gray-500" />
          <p className="text-sm text-gray-500">{label}</p>
          <p className="text-xs text-gray-400">{description}</p>
        </div>
        <input type="file" className="hidden" onChange={(e) => onChange(e.target.files[0])} />
      </label>
    </div>
  </div>
);

const FormSection = ({ icon: Icon, title, children }) => (
  <div className="bg-gray-200 p-6 rounded-xl">
    <div className="flex items-center gap-3 mb-6">
      <Icon className="w-6 h-6 text-green-700" />
      <h2 className="text-2xl font-bold text-gray-800">{title}</h2>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {children}
    </div>
  </div>
);

const LoadingButton = ({ onClick, isLoading, children, className = "" }) => (
  <button
    onClick={onClick}
    disabled={isLoading}
    className={`flex items-center justify-center gap-2 transition-all duration-200 ${className}`}
  >
    {isLoading ? <Loader2 className="w-5 h-5 animate-spin" /> : children}
  </button>
);

const EVDealership= () => {
  const [currentStep, setCurrentStep] = useState('mobile');
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState(INITIAL_FORM_DATA);
  const [otp, setOtp] = useState('');
  const [isOtpSent, setIsOtpSent] = useState(false);
  const location=useLocation();

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const simulateAsyncOperation = (duration, callback) => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      callback();
    }, duration);
  };

  const sendOTP = () => {
    if (!formData.phoneNumber || formData.phoneNumber.length !== 10) {
      alert('Please enter a valid 10-digit mobile number');
      return;
    }
    
    simulateAsyncOperation(2000, () => {
      setIsOtpSent(true);
      alert('OTP sent successfully to ' + formData.phoneNumber);
    });
  };

  const verifyOTP = () => {
    if (!otp || otp.length !== 6) {
      alert('Please enter a valid 6-digit OTP');
      return;
    }
    
    simulateAsyncOperation(1500, () => {
      setCurrentStep('form');
      alert('Mobile number verified successfully!');
    });
  };

  const submitApplication = () => {
    const missingFields = FORM_CONFIG.requiredFields.filter(field => !formData[field]);
    
    if (missingFields.length > 0) {
      alert('Please fill all required fields');
      return;
    }

    if (!formData.declaration) {
      alert('Please accept the declaration');
      return;
    }

    simulateAsyncOperation(3000, () => {
      setCurrentStep('success');
      alert('Application submitted successfully! You will receive a confirmation email shortly.');
    });
  };

  // Mobile verification screen
  if (currentStep === 'mobile') {
    return (
      <div className="min-h-screen bg-green-100 flex items-center justify-center p-4">
        <EvNavbar/>
        <div className="max-w-md w-full bg-white rounded-2xl shadow-2xl p-8">
          <div className="text-center mb-8">
            <div className="w-20 h-20 bg-green-700 rounded-full flex items-center justify-center mx-auto mb-4">
              <Phone className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-3xl font-bold text-gray-800 mb-2">EV Dealership</h1>
            <p className="text-gray-600">Mobile Verification Required</p>
          </div>

          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Mobile Number *</label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">+91</span>
                <input
                  type="tel"
                  placeholder="Enter 10-digit mobile number"
                  value={formData.phoneNumber}
                  onChange={(e) => handleInputChange('phoneNumber', e.target.value)}
                  className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  maxLength="10"
                  disabled={isOtpSent}
                />
              </div>
            </div>

            {!isOtpSent ? (
              <LoadingButton
                onClick={sendOTP}
                isLoading={isLoading}
                className="w-full bg-green-600 text-white py-3 rounded-xl font-semibold hover:bg-green-700"
              >
                Send OTP <ArrowRight className="w-5 h-5" />
              </LoadingButton>
            ) : (
              <div className="space-y-4">
                <InputField
                  label="Enter OTP"
                  type="text"
                  value={otp}
                  onChange={setOtp}
                  placeholder="Enter 6-digit OTP"
                  maxLength="6"
                  required
                  className="text-center text-lg font-bold"
                />
                <LoadingButton
                  onClick={verifyOTP}
                  isLoading={isLoading}
                  className="w-full bg-green-600 text-white py-3 rounded-xl font-semibold hover:bg-green-700"
                >
                  Verify OTP <Check className="w-5 h-5" />
                </LoadingButton>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }

  // Success screen
  if (currentStep === 'success') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 flex items-center justify-center p-4">
        <div className="max-w-md w-full bg-white rounded-2xl shadow-2xl p-8 text-center">
          <div className="w-20 h-20 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <Check className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Application Submitted!</h1>
          <p className="text-gray-600 mb-6">
            Thank you for your interest in becoming an EV bike dealer. We have received your application and will review it shortly.
          </p>
          <p className="text-sm text-gray-500">
            You and our team will receive confirmation emails soon.
          </p>
        </div>
      </div>
    );
  }

  // Main form
  return (
    <div className="min-h-screen bg-green-100 py-28 px-4">
        <EvNavbar/>
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
          <div className="bg-green-700 text-white p-8">
            <h1 className="text-4xl text-center font-bold mb-2">EV Bike Dealership Application</h1>
            <p className="text-blue-100 text-lg text-center">Join our network of sustainable mobility partners</p>
          </div>

          <div className="p-8 space-y-8">
            {/* Personal Details */}
            <FormSection icon={User} title="Personal Details">
              <InputField
                label="Full Name"
                value={formData.fullName}
                onChange={(value) => handleInputChange('fullName', value)}
                placeholder="Enter your full name"
                required
              />
              <InputField
                label="Phone Number"
                value={formData.phoneNumber}
                onChange={() => {}}
                disabled
                className="bg-gray-100"
                required
              />
              <InputField
                label="Email Address"
                type="email"
                value={formData.email}
                onChange={(value) => handleInputChange('email', value)}
                placeholder="Enter your email address"
                required
              />
              <InputField
                label="Age"
                type="number"
                value={formData.age}
                onChange={(value) => handleInputChange('age', value)}
                placeholder="Enter your age"
                min="18"
                max="100"
                required
              />
              <div className="md:col-span-2">
                <FileUpload
                  label="ID Proof (Aadhaar/PAN)"
                  onChange={(file) => handleInputChange('idProof', file)}
                  description="PNG, JPG or PDF (MAX. 10MB)"
                  required
                />
              </div>
            </FormSection>

            {/* Business Details */}
            <FormSection icon={Building} title="Business Details">
              <SelectField
                label="Type of Business"
                value={formData.businessType}
                onChange={(value) => handleInputChange('businessType', value)}
                options={FORM_CONFIG.businessTypes}
                placeholder="Select business type"
                required
              />
              <InputField
                label="Business Name"
                value={formData.businessName}
                onChange={(value) => handleInputChange('businessName', value)}
                placeholder="Enter business name (if any)"
              />
              <InputField
                label="GST Number"
                value={formData.gstNumber}
                onChange={(value) => handleInputChange('gstNumber', value)}
                placeholder="Enter GST number"
              />
              <SelectField
                label="Experience in Automotive Industry"
                value={formData.hasExperience}
                onChange={(value) => handleInputChange('hasExperience', value)}
                options={[{ value: 'yes', label: 'Yes' }, { value: 'no', label: 'No' }]}
                placeholder="Select"
                required
              />
              {formData.hasExperience === 'yes' && (
                <div className="md:col-span-2">
                  <TextareaField
                    label="Experience Details"
                    value={formData.experienceDetails}
                    onChange={(value) => handleInputChange('experienceDetails', value)}
                    placeholder="Describe your experience in automotive or related industry"
                    rows="3"
                  />
                </div>
              )}
            </FormSection>

            {/* Location Details */}
            <FormSection icon={MapPin} title="Location Details">
              <InputField
                label="City/Town"
                value={formData.city}
                onChange={(value) => handleInputChange('city', value)}
                placeholder="Enter city/town"
                required
              />
              <SelectField
                label="State"
                value={formData.state}
                onChange={(value) => handleInputChange('state', value)}
                options={FORM_CONFIG.indianStates}
                placeholder="Select state"
                required
              />
              <InputField
                label="Pincode"
                value={formData.pincode}
                onChange={(value) => handleInputChange('pincode', value)}
                placeholder="Enter pincode"
                maxLength="6"
                required
              />
              <SelectField
                label="Area Type"
                value={formData.areaType}
                onChange={(value) => handleInputChange('areaType', value)}
                options={FORM_CONFIG.areaTiers}
                placeholder="Select area type"
                required
              />
              <div className="md:col-span-2">
                <TextareaField
                  label="Proposed Dealership Address"
                  value={formData.dealershipAddress}
                  onChange={(value) => handleInputChange('dealershipAddress', value)}
                  placeholder="Enter complete address"
                  rows="3"
                  required
                />
              </div>
              <SelectField
                label="Property Status"
                value={formData.propertyStatus}
                onChange={(value) => handleInputChange('propertyStatus', value)}
                options={FORM_CONFIG.propertyStatuses}
                placeholder="Select property status"
                required
              />
            </FormSection>

            {/* Infrastructure */}
            <FormSection icon={Building} title="Infrastructure">
              <InputField
                label="Showroom Size (sq. ft.)"
                type="number"
                value={formData.showroomSize}
                onChange={(value) => handleInputChange('showroomSize', value)}
                placeholder="Enter showroom size"
                min="100"
                required
              />
              {['hasServiceArea', 'hasParkingSpace', 'hasPowerBackup', 'hasChargingStation'].map(field => (
                <SelectField
                  key={field}
                  label={field.replace('has', '').replace(/([A-Z])/g, ' $1').trim()}
                  value={formData[field]}
                  onChange={(value) => handleInputChange(field, value)}
                  options={[{ value: 'yes', label: 'Yes' }, { value: 'no', label: 'No' }]}
                  placeholder="Select"
                  required
                />
              ))}
            </FormSection>

            {/* Investment & Financials */}
            <FormSection icon={DollarSign} title="Investment & Financials">
              <SelectField
                label="Investment Capacity"
                value={formData.investmentCapacity}
                onChange={(value) => handleInputChange('investmentCapacity', value)}
                options={FORM_CONFIG.investmentRanges}
                placeholder="Select investment range"
                required
              />
              <SelectField
                label="Investment Source"
                value={formData.investmentSource}
                onChange={(value) => handleInputChange('investmentSource', value)}
                options={FORM_CONFIG.investmentSources}
                placeholder="Select investment source"
                required
              />
              <SelectField
                label="Willing to Meet Brand Targets"
                value={formData.meetTargets}
                onChange={(value) => handleInputChange('meetTargets', value)}
                options={[{ value: 'yes', label: 'Yes' }, { value: 'no', label: 'No' }]}
                placeholder="Select"
                required
              />
            </FormSection>

            {/* Team Setup */}
            <FormSection icon={Users} title="Team Setup">
              <InputField
                label="Planned Sales Executives"
                type="number"
                value={formData.salesExecutives}
                onChange={(value) => handleInputChange('salesExecutives', value)}
                placeholder="Number of sales executives"
                min="1"
                required
              />
              <InputField
                label="Planned Technicians"
                type="number"
                value={formData.technicians}
                onChange={(value) => handleInputChange('technicians', value)}
                placeholder="Number of technicians"
                min="1"
                required
              />
              <SelectField
                label="Willing to Train Staff"
                value={formData.trainStaff}
                onChange={(value) => handleInputChange('trainStaff', value)}
                options={[{ value: 'yes', label: 'Yes' }, { value: 'no', label: 'No' }]}
                placeholder="Select"
                required
              />
            </FormSection>

            {/* Motivation & Interest */}
            <FormSection icon={FileText} title="Motivation & Interest">
              <div className="md:col-span-2">
                <TextareaField
                  label="Why do you want this dealership?"
                  value={formData.motivation}
                  onChange={(value) => handleInputChange('motivation', value)}
                  placeholder="Share your motivation and vision for this dealership"
                  rows="4"
                  maxLength="500"
                  required
                />
              </div>
              <SelectField
                label="Open to Brand Exclusivity"
                value={formData.exclusivity}
                onChange={(value) => handleInputChange('exclusivity', value)}
                options={FORM_CONFIG.exclusivityOptions}
                placeholder="Select"
                required
              />
            </FormSection>

            {/* Documents Upload */}
            <FormSection icon={Upload} title="Documents Upload">
              <FileUpload
                label="Address Proof"
                onChange={(file) => handleInputChange('addressProof', file)}
                description="Utility bill, rent agreement"
                required
              />
              <FileUpload
                label="Business Proof"
                onChange={(file) => handleInputChange('businessProof', file)}
                description="GST certificate, registration"
              />
              <div className="md:col-span-2">
                <FileUpload
                  label="Property Layout/Showroom Photo (Optional)"
                  onChange={(file) => handleInputChange('propertyLayout', file)}
                  description="Helps us understand your space better"
                />
              </div>
            </FormSection>

            {/* Declaration */}
            <div className="bg-green-50 p-6 rounded-xl border border-blue-200">
              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  id="declaration"
                  checked={formData.declaration}
                  onChange={(e) => handleInputChange('declaration', e.target.checked)}
                  className="mt-1 h-5 w-5 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <label htmlFor="declaration" className="text-sm text-gray-700">
                  <strong>Declaration:</strong> I hereby declare that all the above information is true and complete to the best of my knowledge. I understand that any false information may result in rejection of my application. I am genuinely interested in partnering as a dealer and commit to following the brand guidelines and achieving the set targets.
                </label>
              </div>
            </div>

            {/* Submit Button */}
            <div className="flex justify-center">
              <LoadingButton
                onClick={submitApplication}
                isLoading={isLoading}
                className="bg-green-600 text-white px-12 py-4 rounded-xl font-bold text-lg hover:bg-green-700 shadow-lg hover:shadow-xl"
              >
                <Check className="w-6 h-6" />
                {isLoading ? 'Submitting Application...' : 'Submit Application'}
              </LoadingButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EVDealership;