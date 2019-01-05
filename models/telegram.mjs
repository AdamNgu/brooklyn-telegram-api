import mongoose from "mongoose";

const telegramSchema = new mongoose.Schema({
  paid: {
    type: Boolean,
    required: "bro you need to pay"
  },
  senderName: {
    type: String,
    trim: true,
    required: "Sender must provide a name!"
  },
  senderEmail: {
    type: String,
    trim: true,
    required: "Sender must provide an email!"
  },
  message: {
    type: String,
    required: "You can't send a blank telegram!"
  },
  recipientAddress: {
    name: {
      type: String,
      trim: true,
      required: "You need a name of the recipient!"
    },
    streetAddress: {
      type: String,
      trim: true,
      required: "You must provide a street address."
    },
    city: {
      type: String,
      trim: true,
      required: "You must provide a city."
    },
    state: {
      type: String,
      trim: true,
      required: "You must provide a state."
    },
    zip: {
      type: String,
      trim: true,
      required: "You need a zip code"
    }
  }
});

export default mongoose.model("Telegram", telegramSchema);
