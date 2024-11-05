const users = [
    { userId: "harley21", password: "olen123" },
    { userId: "admin01", password: "adminpass" },
    { userId: "guest99", password: "guestpass" },
    { userId: "member45", password: "memberpass" }
];

function validateLogin() {
    const userId = document.getElementById("userId").value;
    const password = document.getElementById("password").value;
    const errorMessage = document.getElementById("errorMessage");

    const user = users.find(u => u.userId === userId && u.password === password);

    if (user) {
        errorMessage.textContent = "";
        // Redirect ke halaman yang disediakan setelah login berhasil
        href="https://www.rbsports77.com/id" // Ganti URL ini dengan link web yang diinginkan
        return true;
    } else {
        errorMessage.textContent = "Invalid ID or Password!";
        return false;
    }
}
