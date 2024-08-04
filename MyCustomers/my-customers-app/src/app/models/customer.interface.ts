export interface Customer {
  // First Name, Last Name, Email, Created Date/Time, Last Updated Date/Time
  id: string,
  firsName: string,
  lastName: string,
  email: string,
  created?: Date,
  lastUpdated?: Date
}
