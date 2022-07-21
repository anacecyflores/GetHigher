const formImageHandler = async function (event) {
    event.preventDefault();
    console.log('---------------')
    var fd = new FormData();
    const resume = document.querySelector('#file-upload').files[0]
    fd.append("resume", resume);

    // const response = await fetch('api/users/upload', {
    //     method: 'POST',
    //     body: fd
    // })
    // if (response.ok) {
    //     document.location.replace('/dashboard/profile');
    // }
}
document.querySelector('#submitRes')
    .addEventListener('submit', formImageHandler)