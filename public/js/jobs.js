const newFormHandler = async (event) => {
  event.preventDefault();

  const name = document.querySelector('#jobs-title').value.trim();
  const needed_employer = document.querySelector('#jobs-employer').value.trim();
  const description = document.querySelector('#jobs-desc').value.trim();

  if (name && needed_employer && description) {
    const response = await fetch(`/api/jobs`, {
      method: 'POST',
      body: JSON.stringify({ name, needed_employer, description }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to find jobs');
    }
  }
};

const delButtonHandler = async (event) => {
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');

    const response = await fetch(`/api/jobs/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to delete jobs');
    }
  }
};

document
  .querySelector('.new-jobs-form')
  .addEventListener('submit', newFormHandler);

document
  .querySelector('.jobs-list')
  .addEventListener('click', delButtonHandler);
