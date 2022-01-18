import user from "../users.json";

describe("Test Demo", () => {
  it("should return all users", () => {
    expect(user.length).toBe(88);
  });
});
