import { Schema, model, models } from 'mongoose';

const UserSchema = new Schema(
	{
		email: {
			type: String,
			unique: [true, 'Email already exists!'],
			required: [true, 'Email is required'],
		},
		username: {
			type: String,
			required: [true, 'Username is required!'],
			minlength: [4, 'Username must be more than 4 characters!'],
			maxlength: [30, 'Username must be less than 30 characters!'],
			// match: [/^(?=.{4,20}$)(?![_.])(?!.*[_.])[a-zA-Z0-9._]+(?<![_.])$/, 'Username invalid, it should contain 4-20 alphanumeric letters and be unique!'],
		},
		image: {
			type: String,
		},
	},
	{ timestamps: true }
);

const User = models.User || model('User', UserSchema);

export default User;
