const baseURL = 'https://codestar100-1ca13721cbe6.herokuapp.com/'

export const handlers = [
    rest.get(`${baseURL}dj-rest-auth/user/`, (req, res, ctx) => {
        return res(
            ctx.json({
            "pk": 2,
            "username": "TestUser123",
            "email": "",
            "first_name": "",
            "last_name": "",
            "profile_id": 2,
            "profile_image": "https://res.cloudinary.com/diryrandw/image/upload/v1/media/../default_profile_abuqeh"
          })
        );
    }),
    rest.post(`${baseURL}dj-rest-auth/logout/`, (req, res, ctx) => {
        return res(ctx.status(200));
    })
];