function createPhoneNumber() {
  let format = "(xxx) xxx-xxxx";
  const numberToGenerate = [...format].filter((x) => x === "x").length;
  for (var i = 0; i < numberToGenerate; i++) {
    format = format.replace("x", (Math.random() * 10).toFixed(0));
  }
  return format;
}

function getPhoneNumbers({ size }: { size: number }) {
  return new Promise((resolve, reject) => {
    try {
      const length = Math.min(10, size);
      const phones = Array(length)
        .fill(null)
        .map((x, i) => {
          return createPhoneNumber();
        });
      return resolve({
        success: {
          total: length
        },
        contents: {
          phonenumbers: phones
        },
        copyright: "https://x-squad.com/"
      });
    } catch (error) {
      return reject(error);
    }
  });
}

export { getPhoneNumbers };
