const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const res = await fetch('http://localhost:5000/api/form/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: formData.name, phone: formData.phone })
    });

    const data = await res.json();
    alert(data.message);
  } catch (err) {
    alert('Submission failed');
  }
};
   // console.log('Form submitted:', formData);   