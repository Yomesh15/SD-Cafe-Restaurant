import Contact from "../Models/Contact.model.js";

export const SendContact = async (req, res) => {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ msg: "All fields are required!" });
    }

    const newContact = new Contact({ name, email, message });
    await newContact.save();

    // Send proper JSON response
    res.status(200).json({ msg: "Contact information saved!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "Something went wrong!" });
  }
};
