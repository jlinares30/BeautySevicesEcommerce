import mongoose from 'mongoose'

const connectDB = async () => {
	try {
		// Connect to Mongo with new options
		const conn = await mongoose.connect(process.env.MONGO_URI, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
			useCreateIndex: true, // Add this line
		})
		console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline)
	} catch (error) {
		console.error(`Error: ${error.message}`.red.underline.bold)
		// exit with failure
		process.exit(1)
	}
}

export default connectDB