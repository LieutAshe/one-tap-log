export function signIn() {
    // Check if the DOM element exists before manipulating it
    const overlay = document.getElementById('signInOverlay');

    if (overlay) {
        // Change the style only if the element exists
        overlay.style.top = '0dvh'; // 'vh' instead of 'dvh'
    } else {
        console.error("Element with ID 'signInOverlay' not found.");
    }
}

export function cancel() {
    const overlay = document.getElementById('signInOverlay');
    const input = document.getElementById('adminPassword');

    if (overlay) {
        // Change the style only if the element exists
        overlay.style.top = '100dvh'; // 'vh' instead of 'dvh'
        input.value = ''
        return
    } else {
        console.error("Element with ID 'signInOverlay' not found.");
    }
}

export function isEnter(event) {
    if (event.key === "Enter") {
        checkPassword();
    }
}

export function checkPassword() {
    const input = document.getElementById('adminPassword');
    const compare = "Password";

    if (input.value === compare) {
        hasAccess("checker", true);
        console.log("Match")
    } else {
        alert("Incorrect Password")
        return false
    }
}

export function hasAccess(sender, sent) {
    var hasAccess = false;
    if (sender == "checker") {
        if(sent == true) {
            hasAccess = true;
        } else if (sent == false) {
            hasAccess = false;
        }
    }

    if (sender == "requester") {
        return hasAccess;
    }
}