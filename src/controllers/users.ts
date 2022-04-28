import users from "../users.json";
import { getPhoneNumbers } from "../fake.generator";

interface PhoneType {
  success: {
    total: string
  },
  contents: {
    phonenumbers: any
  },
  copyright: string
}

interface UsersType {
    id: number,
    first_name: string,
    last_name: string,
    email: string,
    country: string,
    modified: string,
    vip: boolean,
    phoneNumber: string
}

const GENERATED_NUMBERS_LIMIT = 10

async  function generatePhoneNumbers (size:number) : Promise<[string]> {
  let RandomNumbers = [];
   
  const remainingNumbers = size % GENERATED_NUMBERS_LIMIT;
  const numberOfCalls = Math.floor((size/GENERATED_NUMBERS_LIMIT)) + (remainingNumbers > 0 ? 1 : 0);
  console.log({numberOfCalls});
  
    for (let index = 0; index < numberOfCalls; index++) {
      console.log("index === numberOfCalls-1", index === numberOfCalls-1);
      
      const random:PhoneType = (index === numberOfCalls-1)
      ? await getPhoneNumbers({ size: remainingNumbers }) as PhoneType
      : await getPhoneNumbers({ size: GENERATED_NUMBERS_LIMIT }) as PhoneType;

      RandomNumbers = [...RandomNumbers, ...random.contents.phonenumbers] as any
      console.log({RandomNumbers});
      
    }

    return RandomNumbers
}

async function getUsers (): Promise<UsersType[]> {
  const phones = await generatePhoneNumbers(users.length);

  const newUsers = [...users].map((user, i) => {
    const newUser: UsersType = {
      ...user,
      phoneNumber: phones[i]
    }

    return newUser;
  });

  return newUsers
}

export {
  generatePhoneNumbers,
  getUsers
};