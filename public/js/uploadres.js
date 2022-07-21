//Upload Resume Function
const formResumeHandler = async function (event) {
    event.preventDefault();
    console.log('---------------')
    var fd = new FormData();
    const resume = document.querySelector('#file-upload').files[0]
    fd.append("resume", resume);

    //route needs to be adjusted, below is copied code from https://nanny-poppins.herokuapp.com
    const response = await fetch('api/users/upload', {
        method: 'POST',
        body: fd
    })
    if (response.ok) {
        document.location.replace('/dashboard/profile');
    }
}
document.querySelector('#submitRes')
    .addEventListener('submit', formResumeHandler)