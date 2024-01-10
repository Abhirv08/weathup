const { USERNAME, PASSWORD } = process.env;

export const connectionStr = "mongodb+srv://" + USERNAME + ":" + PASSWORD + "@cluster0.huyr2hs.mongodb.net/codesDB?retryWrites=true&w=majority"