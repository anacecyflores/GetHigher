const destroyJob = (e) => {
  let btnId = e.target.id;
  let dbId = e.target.dataset.id;

  if (btnId == 'delete-btn') {
    e.target.parentElement.parentElement.parentElement.style.display = 'none';
    const response = fetch(`/api/qs/${dbId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response;
  }
};
document.addEventListener('click', destroyJob);
