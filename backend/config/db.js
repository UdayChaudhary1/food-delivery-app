import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose
    .connect(
      "mongodb+srv://chaudharyuday081:yF0d0RXo7ZDZMGJb@cluster0.f28st.mongodb.net/food-del"
    )
    .then(() => console.log("DB Connected"));
};

// add your mongoDB connection string above.
// Do not use '@' symbol in your databse user's password else it will show an error.
