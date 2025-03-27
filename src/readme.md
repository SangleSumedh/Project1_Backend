# VideoTube Backend

This project is the backend service for the VideoTube application, a platform for video sharing and streaming. It provides APIs for user management, video uploads, streaming, and other core functionalities.

## Features

- **User Management**: User registration, authentication, and profile management.
- **Video Uploads**: Secure video uploads with metadata storage.
- **Video Streaming**: Efficient video streaming with adaptive bitrate support.
- **Comments and Likes**: User interactions through comments and likes.
- **Search and Recommendations**: Search functionality and personalized video recommendations.

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/your-repo/videotube-backend.git
    cd videotube-backend
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Set up environment variables:
    Create a `.env` file in the root directory and configure the following:
    ```
    DATABASE_URL=<your-database-url>
    JWT_SECRET=<your-jwt-secret>
    CLOUD_STORAGE_KEY=<your-cloud-storage-key>
    ```

4. Run database migrations:
    ```bash
    npm run migrate
    ```

5. Start the server:
    ```bash
    npm start
    ```

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register a new user.
- `POST /api/auth/login` - Authenticate a user and return a token.

### Videos
- `POST /api/videos` - Upload a new video.
- `GET /api/videos/:id` - Get video details.
- `GET /api/videos` - List all videos.

### Comments
- `POST /api/videos/:id/comments` - Add a comment to a video.
- `GET /api/videos/:id/comments` - Get comments for a video.

### Likes
- `POST /api/videos/:id/like` - Like a video.
- `POST /api/videos/:id/unlike` - Unlike a video.

## Technologies Used

- **Node.js**: Backend runtime.
- **Express.js**: Web framework.
- **MongoDB**: Database for storing data.
- **AWS S3**: Cloud storage for video files.
- **JWT**: Authentication and authorization.

## Contributing

1. Fork the repository.
2. Create a new branch:
    ```bash
    git checkout -b feature-name
    ```
3. Commit your changes:
    ```bash
    git commit -m "Add feature-name"
    ```
4. Push to the branch:
    ```bash
    git push origin feature-name
    ```
5. Open a pull request.

## License

This project is licensed under the [MIT License](LICENSE).

## Contact

For questions or support, please contact [sanglesumedh15@gmail.com].