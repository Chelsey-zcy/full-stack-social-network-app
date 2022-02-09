const mongoose = require("mongoose");
const { Schema } = mongoose;

const ProfileSchema = Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "user",
  },
  company: {
    type: String,
  },
  website: {
    type: String,
  },
  location: {
    type: String,
  },
  status: {
    type: String,
  },
  skills: {
    type: [String],
    require: true,
  },
  bio: {
    type: String,
  },
  github_username: {
    type: String,
  },
  experience: [
    {
      title: {
        type: String,
        require: true,
      },
      company: {
        type: String,
        require: true,
      },
      location: {
        type: String,
      },
      from: {
        type: Date,
        required: true,
      },
      to: {
        type: Date,
      },
      current: {
        type: Boolean,
        default: false,
      },
      description: {
        type: String,
      },
    },
  ],

  education: [
    {
      school: {
        type: String,
        require: true,
      },
      degree: {
        type: String,
        require: true,
      },
      field_of_study: {
        type: String,
      },
      from: {
        type: Date,
        required: true,
      },
      to: {
        type: Date,
      },
      description: {
        type: String,
      },
    },
  ],

  social: {
    youtube: {
      type: String,
    },
    twitter: {
      type: String,
    },
    facebook: {
      type: String,
    },
    linkedin: {
      type: String,
    },
    instagram: {
      type: String,
    },
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = Profile = mongoose.model("Profile", ProfileSchema);
