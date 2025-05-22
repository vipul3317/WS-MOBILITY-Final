import React from "react";
import { Calendar, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from "react-router-dom";

const AppointForm = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [showForm, setShowForm] = useState(false);

    useEffect(() => {
        if (location.state?.openForm) {
            setShowForm(true);
        }
    }, [location.state]);

    const closeForm = () => {
        setShowForm(false);
        navigate('/carhub');
    };

    const [carBrands, setCarBrands] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        carBrand: '',
        carModel: '',
        year: '',
        mileage: '',
        condition: '',
        issues: [],
        otherIssue: '',
        appointmentDate: null,
    });

    useEffect(() => {
        const fetchCarBrands = async () => {
            setIsLoading(true);
            try {
                const response = await fetch('https://api.allorigins.win/get?url=' + encodeURIComponent('https://www.carqueryapi.com/api/0.3/?cmd=getMakes'));
                const result = await response.json();
                const data = JSON.parse(result.contents);

                if (data && data.Makes && Array.isArray(data.Makes)) {
                    const brands = data.Makes.map(make => make.make_display);
                    setCarBrands(brands);
                    setError(null);
                } else {
                    throw new Error('Invalid API response format');
                }
            } catch (err) {
                console.error('Error fetching car brands:', err);
                setError('Failed to load car brands. Please try again later.');

                // Fallback to the curated list
                setCarBrands([
                    'Acura', 'Alfa Romeo', 'Aston Martin', 'Audi', 'Bentley', 'BMW',
                    'Bugatti', 'Buick', 'Cadillac', 'Chevrolet', 'Chrysler', 'Dodge',
                    'Ferrari', 'Fiat', 'Ford', 'Genesis', 'GMC', 'Honda', 'Hyundai',
                    'Infiniti', 'Jaguar', 'Jeep', 'Kia', 'Lamborghini', 'Land Rover',
                    'Lexus', 'Lincoln', 'Maserati', 'Mazda', 'McLaren', 'Mercedes-Benz',
                    'Mini', 'Mitsubishi', 'Nissan', 'Porsche', 'Ram', 'Rolls-Royce',
                    'Subaru', 'Tesla', 'Toyota', 'Volkswagen', 'Volvo'
                ]);
            } finally {
                setIsLoading(false);
            }
        };

        fetchCarBrands();
    }, []);

    const conditions = ['Excellent', 'Good', 'Fair', 'Poor'];
    const possibleIssues = [
        'Oil Change', 'Brake Problems', 'Engine Issues',
        'Transmission Problems', 'Battery Issues', 'AC/Heating Problems',
        'Tire Replacement/Rotation', 'Electrical Problems', 'Other'
    ];

    const handleIssueToggle = (issue) => {
        const updatedIssues = [...formData.issues];

        if (updatedIssues.includes(issue)) {
            const index = updatedIssues.indexOf(issue);
            updatedIssues.splice(index, 1);
        } else {
            updatedIssues.push(issue);
        }

        setFormData({
            ...formData,
            issues: updatedIssues,
        });
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        alert('Appointment scheduled successfully!');
    };

    // Calendar functionality
    const [currentDate, setCurrentDate] = useState(new Date());
    const [selectedDate, setSelectedDate] = useState(null);

    const handlePrevMonth = () => {
        setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
    };

    const handleNextMonth = () => {
        setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
    };

    const getDaysInMonth = (year, month) => {
        return new Date(year, month + 1, 0).getDate();
    };

    const getFirstDayOfMonth = (year, month) => {
        return new Date(year, month, 1).getDay();
    };

    const handleDateSelect = (day) => {
        const newDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);

        // Don't allow past dates or weekends
        const today = new Date();
        today.setHours(0, 0, 0, 0);

        const dayOfWeek = newDate.getDay();
        const isPastDate = newDate < today;
        const isWeekend = dayOfWeek === 0;

        if (!isPastDate && !isWeekend) {
            setSelectedDate(newDate);
            setFormData({
                ...formData,
                appointmentDate: newDate,
            });
        }
    };

    const renderCalendar = () => {
        const year = currentDate.getFullYear();
        const month = currentDate.getMonth();
        const daysInMonth = getDaysInMonth(year, month);
        const firstDay = getFirstDayOfMonth(year, month);

        const monthName = currentDate.toLocaleString('default', { month: 'long' });

        const days = [];
        for (let i = 0; i < firstDay; i++) {
            days.push(<div key={`empty-${i}`} className="h-8 w-8"></div>);
        }

        const today = new Date();
        today.setHours(0, 0, 0, 0);

        for (let day = 1; day <= daysInMonth; day++) {
            const date = new Date(year, month, day);
            const isPastDate = date < today;
            const isWeekend = date.getDay() === 0;
            const isSelected = selectedDate &&
                selectedDate.getDate() === day &&
                selectedDate.getMonth() === month &&
                selectedDate.getFullYear() === year;

            const dayClassNames = `
                flex items-center justify-center h-8 w-8 rounded-full cursor-pointer
                ${isPastDate || isWeekend ? 'text-gray-300 cursor-not-allowed' : 'hover:bg-green-100'}
                ${isSelected ? 'bg-green-700 text-white hover:bg-green-500' : ''}
            `;

            days.push(
                <div
                    key={day}
                    className={dayClassNames}
                    onClick={() => !isPastDate && !isWeekend && handleDateSelect(day)}
                >
                    {day}
                </div>
            );
        }

        return (
            <div className="mt-4 border rounded-lg p-2 md:p-4 bg-white shadow-sm">
                <div className="flex justify-between items-center mb-4">
                    <button
                        type="button"
                        onClick={handlePrevMonth}
                        className="p-1 rounded-full hover:bg-gray-100"
                    >
                        <ChevronLeft size={20} />
                    </button>
                    <div className="font-semibold">
                        {monthName} {year}
                    </div>
                    <button
                        type="button"
                        onClick={handleNextMonth}
                        className="p-1 rounded-full hover:bg-gray-100"
                    >
                        <ChevronRight size={20} />
                    </button>
                </div>

                <div className="grid grid-cols-7 mb-2">
                    {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
                        <div key={day} className="text-center text-xs sm:text-sm font-medium text-gray-500">
                            {day}
                        </div>
                    ))}
                </div>

                <div className="grid grid-cols-7 gap-1">
                    {days}
                </div>

                <div className="mt-3 text-xs text-gray-500">
                    <p>• Sunday not available</p>
                    <p>• Past dates not available</p>
                </div>
            </div>
        );
    };

    return (
        <div className="relative min-h-screen bg-transparent">
            {/* Backdrop */}
            {showForm && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm transition-all duration-300 overflow-y-hidden px-4 py-6">
                    <div className="bg-white rounded-lg shadow-lg w-full max-w-full transform scale-100 opacity-100 transition-all duration-300 relative">
                        {/* Close Button */}
                        <button
                            onClick={closeForm}
                            className="absolute top-2 right-2 text-gray-600 hover:text-red-600 text-3xl z-10"
                            aria-label="Close form"
                        >
                            &times;
                        </button>

                        <div className="w-full overflow-y-auto max-h-screen" style={{
                            backgroundColor: '#f4f3f5',
                            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='192' height='192' viewBox='0 0 192 192'%3E%3Cpath fill='%232a9632' fill-opacity='0.10' d='M192 15v2a11 11 0 0 0-11 11c0 1.94 1.16 4.75 2.53 6.11l2.36 2.36a6.93 6.93 0 0 1 1.22 7.56l-.43.84a8.08 8.08 0 0 1-6.66 4.13H145v35.02a6.1 6.1 0 0 0 3.03 4.87l.84.43c1.58.79 4 .4 5.24-.85l2.36-2.36a12.04 12.04 0 0 1 7.51-3.11 13 13 0 1 1 .02 26 12 12 0 0 1-7.53-3.11l-2.36-2.36a4.93 4.93 0 0 0-5.24-.85l-.84.43a6.1 6.1 0 0 0-3.03 4.87V143h35.02a8.08 8.08 0 0 1 6.66 4.13l.43.84a6.91 6.91 0 0 1-1.22 7.56l-2.36 2.36A10.06 10.06 0 0 0 181 164a11 11 0 0 0 11 11v2a13 13 0 0 1-13-13 12 12 0 0 1 3.11-7.53l2.36-2.36a4.93 4.93 0 0 0 .85-5.24l-.43-.84a6.1 6.1 0 0 0-4.87-3.03H145v35.02a8.08 8.08 0 0 1-4.13 6.66l-.84.43a6.91 6.91 0 0 1-7.56-1.22l-2.36-2.36A10.06 10.06 0 0 0 124 181a11 11 0 0 0-11 11h-2a13 13 0 0 1 13-13c2.47 0 5.79 1.37 7.53 3.11l2.36 2.36a4.94 4.94 0 0 0 5.24.85l.84-.43a6.1 6.1 0 0 0 3.03-4.87V145h-35.02a8.08 8.08 0 0 1-6.66-4.13l-.43-.84a6.91 6.91 0 0 1 1.22-7.56l2.36-2.36A10.06 10.06 0 0 0 107 124a11 11 0 0 0-22 0c0 1.94 1.16 4.75 2.53 6.11l2.36 2.36a6.93 6.93 0 0 1 1.22 7.56l-.43.84a8.08 8.08 0 0 1-6.66 4.13H49v35.02a6.1 6.1 0 0 0 3.03 4.87l.84.43c1.58.79 4 .4 5.24-.85l2.36-2.36a12.04 12.04 0 0 1 7.51-3.11A13 13 0 0 1 81 192h-2a11 11 0 0 0-11-11c-1.94 0-4.75 1.16-6.11 2.53l-2.36 2.36a6.93 6.93 0 0 1-7.56 1.22l-.84-.43a8.08 8.08 0 0 1-4.13-6.66V145H11.98a6.1 6.1 0 0 0-4.87 3.03l-.43.84c-.79 1.58-.4 4 .85 5.24l2.36 2.36a12.04 12.04 0 0 1 3.11 7.51A13 13 0 0 1 0 177v-2a11 11 0 0 0 11-11c0-1.94-1.16-4.75-2.53-6.11l-2.36-2.36a6.93 6.93 0 0 1-1.22-7.56l.43-.84a8.08 8.08 0 0 1 6.66-4.13H47v-35.02a6.1 6.1 0 0 0-3.03-4.87l-.84-.43c-1.59-.8-4-.4-5.24.85l-2.36 2.36A12 12 0 0 1 28 109a13 13 0 1 1 0-26c2.47 0 5.79 1.37 7.53 3.11l2.36 2.36a4.94 4.94 0 0 0 5.24.85l.84-.43A6.1 6.1 0 0 0 47 84.02V49H11.98a8.08 8.08 0 0 1-6.66-4.13l-.43-.84a6.91 6.91 0 0 1 1.22-7.56l2.36-2.36A10.06 10.06 0 0 0 11 28 11 11 0 0 0 0 17v-2a13 13 0 0 1 13 13c0 2.47-1.37 5.79-3.11 7.53l-2.36 2.36a4.94 4.94 0 0 0-.85 5.24l.43.84A6.1 6.1 0 0 0 11.98 47H47V11.98a8.08 8.08 0 0 1 4.13-6.66l.84-.43a6.91 6.91 0 0 1 7.56 1.22l2.36 2.36A10.06 10.06 0 0 0 68 11 11 11 0 0 0 79 0h2a13 13 0 0 1-13 13 12 12 0 0 1-7.53-3.11l-2.36-2.36a4.93 4.93 0 0 0-5.24-.85l-.84.43A6.1 6.1 0 0 0 49 11.98V47h35.02a8.08 8.08 0 0 1 6.66 4.13l.43.84a6.91 6.91 0 0 1-1.22 7.56l-2.36 2.36A10.06 10.06 0 0 0 85 68a11 11 0 0 0 22 0c0-1.94-1.16-4.75-2.53-6.11l-2.36-2.36a6.93 6.93 0 0 1-1.22-7.56l.43-.84a8.08 8.08 0 0 1 6.66-4.13H143V11.98a6.1 6.1 0 0 0-3.03-4.87l-.84-.43c-1.59-.8-4-.4-5.24.85l-2.36 2.36A12 12 0 0 1 124 13a13 13 0 0 1-13-13h2a11 11 0 0 0 11 11c1.94 0 4.75-1.16 6.11-2.53l2.36-2.36a6.93 6.93 0 0 1 7.56-1.22l.84.43a8.08 8.08 0 0 1 4.13 6.66V47h35.02a6.1 6.1 0 0 0 4.87-3.03l.43-.84c.8-1.59.4-4-.85-5.24l-2.36-2.36A12 12 0 0 1 179 28a13 13 0 0 1 13-13zM84.02 143a6.1 6.1 0 0 0 4.87-3.03l.43-.84c.8-1.59.4-4-.85-5.24l-2.36-2.36A12 12 0 0 1 83 124a13 13 0 1 1 26 0c0 2.47-1.37 5.79-3.11 7.53l-2.36 2.36a4.94 4.94 0 0 0-.85 5.24l.43.84a6.1 6.1 0 0 0 4.87 3.03H143v-35.02a8.08 8.08 0 0 1 4.13-6.66l.84-.43a6.91 6.91 0 0 1 7.56 1.22l2.36 2.36A10.06 10.06 0 0 0 164 107a11 11 0 0 0 0-22c-1.94 0-4.75 1.16-6.11 2.53l-2.36 2.36a6.93 6.93 0 0 1-7.56 1.22l-.84-.43a8.08 8.08 0 0 1-4.13-6.66V49h-35.02a6.1 6.1 0 0 0-4.87 3.03l-.43.84c-.79 1.58-.4 4 .85 5.24l2.36 2.36a12.04 12.04 0 0 1 3.11 7.51A13 13 0 1 1 83 68a12 12 0 0 1 3.11-7.53l2.36-2.36a4.93 4.93 0 0 0 .85-5.24l-.43-.84A6.1 6.1 0 0 0 84.02 49H49v35.02a8.08 8.08 0 0 1-4.13 6.66l-.84.43a6.91 6.91 0 0 1-7.56-1.22l-2.36-2.36A10.06 10.06 0 0 0 28 85a11 11 0 0 0 0 22c1.94 0 4.75-1.16 6.11-2.53l2.36-2.36a6.93 6.93 0 0 1 7.56-1.22l.84.43a8.08 8.08 0 0 1 4.13 6.66V143h35.02z'%3E%3C/path%3E%3C/svg%3E")`
                        }}>
                            <form id="appointmentForm" className="p-4 bg-blue-50 m-4 md:mx-auto md:my-8 shadow-lg rounded-lg max-w-3xl shadow-all-directions1">
                                <div className="flex justify-center items-center gap-2 p-4">
                                    <Calendar className="text-green-800" />
                                    <h1 className="text-xl md:text-2xl font-bold">Car Service Appointment</h1>
                                </div>

                                <div className="space-y-4 p-2 md:p-4">
                                    {/* Personal Information */}
                                    <div className="space-y-3">
                                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                                            <label htmlFor="name" className="block text-base md:text-lg font-medium text-gray-800 mb-1 sm:mb-0">
                                                Your Name<span className="text-red-700">*</span>
                                            </label>
                                            <input
                                                type="text"
                                                id="name"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                required
                                                className="w-full sm:w-64 md:w-80 px-2 py-1 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                                            />
                                        </div>

                                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                                            <label htmlFor="phone" className="block text-base md:text-lg font-medium text-gray-800 mb-1 sm:mb-0">
                                                Phone Number<span className="text-red-700">*</span>
                                            </label>
                                            <input
                                                type="text"
                                                id="phone"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                required
                                                className="w-full sm:w-64 md:w-80 px-2 py-1 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                                            />
                                        </div>
                                    </div>

                                    {/* Vehicle Information Section */}
                                    <div className="mt-6">
                                        <h2 className="text-lg md:text-xl font-bold border-b border-gray-300 pb-1 mb-3">Vehicle Information</h2>

                                        <div className="space-y-3">
                                            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                                                <label htmlFor="carBrand" className="block text-base md:text-lg font-medium text-gray-800 mb-1 sm:mb-0">
                                                    Car Brand<span className="text-red-700">*</span>
                                                </label>
                                                <select
                                                    id="carBrand"
                                                    name="carBrand"
                                                    value={formData.carBrand}
                                                    onChange={handleChange}
                                                    required
                                                    disabled={isLoading}
                                                    className="w-full sm:w-64 md:w-80 px-2 py-1 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                                                >
                                                    <option value="">
                                                        {isLoading ? 'Loading brands...' : 'Select Car Brand'}
                                                    </option>
                                                    {carBrands.map((brand) => (
                                                        <option key={brand} value={brand}>
                                                            {brand}
                                                        </option>
                                                    ))}
                                                </select>
                                            </div>
                                            {error && <p className="text-sm text-red-600">{error}</p>}

                                            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                                                <label htmlFor="carModel" className="block text-base md:text-lg font-medium text-gray-800 mb-1 sm:mb-0">
                                                    Car Model<span className="text-red-700">*</span>
                                                </label>
                                                <input
                                                    type="text"
                                                    id="carModel"
                                                    name="carModel"
                                                    value={formData.carModel}
                                                    onChange={handleChange}
                                                    required
                                                    className="w-full sm:w-64 md:w-80 px-2 py-1 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                                                />
                                            </div>

                                            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                                                <label htmlFor="year" className="block text-base md:text-lg font-medium text-gray-800 mb-1 sm:mb-0">
                                                    Year<span className="text-red-700">*</span>
                                                </label>
                                                <input
                                                    type="text"
                                                    id="year"
                                                    name="year"
                                                    value={formData.year}
                                                    onChange={handleChange}
                                                    required
                                                    className="w-full sm:w-64 md:w-80 px-2 py-1 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                                                />
                                            </div>

                                            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                                                <label htmlFor="mileage" className="block text-base md:text-lg font-medium text-gray-800 mb-1 sm:mb-0">
                                                    Current Mileage<span className="text-red-700">*</span>
                                                </label>
                                                <input
                                                    type="text"
                                                    id="mileage"
                                                    name="mileage"
                                                    value={formData.mileage}
                                                    onChange={handleChange}
                                                    required
                                                    className="w-full sm:w-64 md:w-80 px-2 py-1 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Car Condition */}
                                    <div className="mt-4">
                                        <label htmlFor="condition" className="block text-base md:text-lg font-medium text-gray-800 mb-2">
                                            Car Condition<span className="text-red-700">*</span>
                                        </label>
                                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 md:gap-8">
                                            {conditions.map((condition) => (
                                                <div key={condition} className="flex items-center">
                                                    <input
                                                        type="radio"
                                                        id={condition}
                                                        name="condition"
                                                        value={condition}
                                                        checked={formData.condition === condition}
                                                        onChange={handleChange}
                                                        className="h-4 w-4 accent-green-700"
                                                        required
                                                    />
                                                    <label htmlFor={condition} className="ml-2 text-sm text-gray-700">
                                                        {condition}
                                                    </label>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Service Issues */}
                                    <div className="mt-4">
                                        <label htmlFor="issues" className="block text-base md:text-lg font-medium text-gray-800 mb-1">
                                            Service Issues<span className="text-red-700">*</span>
                                        </label>
                                        <p className="text-xs md:text-sm text-gray-600 mb-2">
                                            What issues are you experiencing? (Select all that apply)
                                        </p>
                                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
                                            {possibleIssues.map((issue) => (
                                                <div key={issue} className="flex items-center">
                                                    <input
                                                        type="checkbox"
                                                        id={issue}
                                                        checked={formData.issues.includes(issue)}
                                                        onChange={() => handleIssueToggle(issue)}
                                                        className="h-4 w-4 accent-green-700"
                                                    />
                                                    <label htmlFor={issue} className="ml-2 text-sm text-gray-700">
                                                        {issue}
                                                    </label>
                                                </div>
                                            ))}
                                        </div>
                                        {formData.issues.includes('Other') && (
                                            <div className="mt-3">
                                                <label htmlFor="otherIssue" className="block text-sm font-medium text-gray-700 mb-1">
                                                    Please specify other issues:
                                                </label>
                                                <textarea
                                                    id="otherIssue"
                                                    name="otherIssue"
                                                    value={formData.otherIssue}
                                                    onChange={handleChange}
                                                    rows="3"
                                                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                                                ></textarea>
                                            </div>
                                        )}
                                    </div>

                                    {/* Appointment Date */}
                                    <div className="mt-6">
                                        <label htmlFor="appointmentDate" className="block text-base md:text-lg font-medium text-gray-800 mb-2">
                                            Appointment Date<span className="text-red-700">*</span>
                                        </label>
                                        <div className="bg-white p-3 md:p-6 rounded-lg shadow-sm">
                                            <p className="text-xs md:text-sm text-gray-600 mb-4">
                                                Please select your preferred appointment date. Our service hours are Monday to Friday, 8:00 AM to 6:00 PM.
                                            </p>

                                            {renderCalendar()}

                                            {selectedDate && (
                                                <div className="mt-4 p-3 bg-green-50 border border-green-200 rounded-md">
                                                    <p className="text-xs md:text-sm font-medium text-green-800">
                                                        Selected Date: {selectedDate.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
                                                    </p>
                                                </div>
                                            )}
                                        </div>
                                    </div>

                                    {/* Submit Button */}
                                    <div className="flex justify-center sm:justify-end pt-6">
                                        <button
                                            type="submit"
                                            onClick={handleSubmit}
                                            className="w-full sm:w-auto px-6 py-3 bg-green-700 text-white font-medium rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-colors"
                                        >
                                            Schedule Appointment
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AppointForm;