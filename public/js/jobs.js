const newFormHandler = async (event) => {
  event.preventDefault();

  const position = document.querySelector('#positionSearch').value.trim();
  const location = document.querySelector('#locationSearch').value.trim();

  if (position && location) {
    const response = await fetch('api/jobsFetch', {
      method: 'POST',
      body: JSON.stringify({ position, location }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      // document.location.replace('/quicksearch');
      document.location.reload();
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
