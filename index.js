function sendMessage()
{
    const message ="Hi";
    setTimeout(() =>
    {
        const serverResponse="Hi From server side";

        displayResponse(serverResponse);
        recordResponse(serverResponse);

    },1000);
}
function displayResponse(response) {
    const responseElement = document.getElementById("response");
    responseElement.innerHTML = `Server Response: ${response}`;
}

function recordResponse(response) {
    
    console.log("Response recorded:", response);
}