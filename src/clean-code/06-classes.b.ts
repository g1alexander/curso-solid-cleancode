(() => {
  // no aplicando el principio de responsabilidad única
  type Gender = "M" | "F";

  interface PersonProps {
    name: string;
    gender: Gender;
    birthDate: Date;
  }

  class Person {
    public name: string;
    public gender: Gender;
    public birthDate: Date;

    constructor({ name, gender, birthDate }: PersonProps) {
      this.name = name;
      this.gender = gender;
      this.birthDate = birthDate;
    }
  }

  // const person = new Person('John', 'M', new Date('1990-01-01'))
  // console.log(person)

  interface UserProps extends PersonProps {
    email: string;
    role: string;
  }

  class User extends Person {
    public lastAccess: Date;
    public email: string;
    public role: string;

    constructor({ email, role, name, gender, birthDate }: UserProps) {
      super({ name, gender, birthDate });

      this.email = email;
      this.role = role;
      this.lastAccess = new Date();
    }

    checkCredentials() {
      return true;
    }
  }

  interface UserSettingsProps extends UserProps {
    workingDirectory: string;
    lastOpenFolder: string;
  }

  class UserSettings extends User {
    public workingDirectory: string;
    public lastOpenFolder: string;

    constructor({
      workingDirectory,
      lastOpenFolder,
      email,
      role,
      name,
      gender,
      birthDate,
    }: UserSettingsProps) {
      super({ email, role, name, gender, birthDate });
      this.workingDirectory = workingDirectory;
      this.lastOpenFolder = lastOpenFolder;
    }
  }

  const userSettings = new UserSettings({
    workingDirectory: "/home/user",
    lastOpenFolder: "/home/user/projects",
    email: "hooa@example.com",
    role: "admin",
    name: "John",
    gender: "M",
    birthDate: new Date("1990-01-01"),
  });

  console.log(userSettings, userSettings.checkCredentials());
})();
