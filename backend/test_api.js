async function test() {
  const testData = {
    name: 'Antigravity Tester',
    email: 'ammarfarid03@gmail.com',
    service: 'Testing',
    message: 'Hello! This is an automated test of your contact form backend.'
  };

  try {
    const response = await fetch('http://localhost:5000/send', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(testData)
    });

    const result = await response.json();
    console.log('API Response:', result);
  } catch (error) {
    console.error('Test Failed:', error.message);
  }
}

test();
