import { generatePhoneNumbers, getUsers } from "../controllers/users";
import user from "../users.json";

const USERS_LENGTH = 88;

describe("Test Demo", () => {
  it("should return all users", () => {
    expect(user.length).toBe(88);
  });
});

describe("Test getUsers", () => {
  it("should return all users", async () => {
    const users = await getUsers();
    expect(users.length).toBe(88);
  });

  it("should return all users", async () => {
    const users = await getUsers();
    users.map(user => {
      expect(user).toHaveProperty('phoneNumber');
      expect(user.phoneNumber).toBeDefined();
    })
  });
});

describe("Test getPhoneNumbers", () => {
  it("should return an array of numbers with given size", async () => {
    const phones = await generatePhoneNumbers(USERS_LENGTH);

    expect(phones.length).toBe(USERS_LENGTH);
  });
});
