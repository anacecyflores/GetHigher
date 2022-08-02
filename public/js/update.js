const updatePersonal = (e) => {
  let btnId = e.target.id;
  let dbId = e.target.dataset.id;
  const firstName = document.querySelector('#first-name').value.trim();
  const lastName = document.querySelector('#last-name').value.trim();
  const email = document.querySelector('#email-address').value.trim();
  const street = document.querySelector('#street-address').value.trim();
  const city = document.querySelector('#city').value.trim();
  const state = document.querySelector('#region').value.trim();
  const zipcode = document.querySelector('#postal-code').value.trim();
  const country = document.querySelector('#country').value.trim();

  const website = document.querySelector('#website').value.trim();
  const about = document.querySelector('#about').value.trim();

  if (btnId == 'p-sv-btn') {
    const response = fetch(`/api/update/${dbId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        firstName,
        lastName,
        email,
        country,
        street,
        city,
        state,
        zipcode,
      }),
    });
    return response;
  }

  if (btnId == 'w-sv-btn') {
    const response = fetch(`/api/update/${dbId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        website,
        about,
      }),
    });
    return response;
  }
};

document.addEventListener('click', updatePersonal);
