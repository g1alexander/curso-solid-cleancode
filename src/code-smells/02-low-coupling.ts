(() => {
  // aplicando el principio de responsabilidad única
  // priorizar la composición sobre la herencia

  type Gender = "M" | "F";

  interface PersonProps {
    firstName: string;
    lastName: string;
    gender: Gender;
    birthDate: Date;
  }

  class Person {
    public firstName: string;
    public lastName: string;
    public gender: Gender;
    public birthDate: Date;

    constructor({ firstName, lastName, gender, birthDate }: PersonProps) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.gender = gender;
      this.birthDate = birthDate;
    }
  }

  // const person = new Person('John', 'M', new Date('1990-01-01'))
  // console.log(person)

  interface UserProps {
    email: string;
    role: string;
  }

  class User {
    public lastAccess: Date;
    public email: string;
    public role: string;

    constructor({ email, role }: UserProps) {
      this.email = email;
      this.role = role;
      this.lastAccess = new Date();
    }

    checkCredentials() {
      return true;
    }
  }

  interface settingsProps {
    workingDirectory: string;
    lastOpenFolder: string;
  }

  class Settings {
    public workingDirectory: string;
    public lastOpenFolder: string;

    constructor({ workingDirectory, lastOpenFolder }: settingsProps) {
      this.workingDirectory = workingDirectory;
      this.lastOpenFolder = lastOpenFolder;
    }
  }

  interface UserSettingsProps extends Person, UserProps, settingsProps {}

  class UserSettings {
    public person: Person;
    public user: User;
    public settings: Settings;

    constructor({
      firstName,
      lastName,
      birthDate,
      gender,
      email,
      role,
      workingDirectory,
      lastOpenFolder,
    }: UserSettingsProps) {
      this.person = new Person({ firstName, lastName, birthDate, gender });
      this.user = new User({ email, role });
      this.settings = new Settings({ workingDirectory, lastOpenFolder });
    }
  }

  const userSettings = new UserSettings({
    workingDirectory: "/home/user",
    lastOpenFolder: "/home/user/projects",
    email: "hooa@example.com",
    role: "admin",
    firstName: "John",
    lastName: "Doe",
    gender: "M",
    birthDate: new Date("1990-01-01"),
  });

  console.log(userSettings, userSettings.user.checkCredentials());
})();
