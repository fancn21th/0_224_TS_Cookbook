interface Admin {
  id: string;
  role: string;
}

interface User {
  email: string;
}

function redirectToAdminPage(role: string): void {
  console.log(role);
}

function redirectToHomePage(email: string): void {
  console.log(email);
}

function redirect(usr: Admin | User) {
  // type inference with in operator
  if ("role" in usr) {
    redirectToAdminPage(usr.role);
  } else {
    redirectToHomePage(usr.email);
  }
}
