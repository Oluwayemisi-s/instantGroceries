import React from "react"

export default function SignUpForm () {
    // const [signupform, setSignupform] = useState({

    // });
    // // const [password, setPassword] = useState("");
    // // const [passwordConfirmation, setPasswordConfirmation] = useState("");
    // // const [imageUrl, setImageUrl] = useState("");
    // // const [bio, setBio] = useState("");
    // // const [errors, setErrors] = useState([]);
    // // const [isLoading, setIsLoading] = useState(false);
  
     function handleSubmit(e) {
        e.preventDefault();
        console.log("Submitting Form...")
    // //   setErrors([]);
    // //   setIsLoading(true);
    // //   fetch("/signup", {
    // //     method: "POST",
    // //     headers: {
    // //       "Content-Type": "application/json",
    // //     },
    // //     body: JSON.stringify({
    // //       username,
    // //       password,
    // //       password_confirmation: passwordConfirmation,
    // //       image_url: imageUrl,
    // //       bio,
    // //     }),
    // //   }).then((r) => {
    // //     setIsLoading(false);
    // //     if (r.ok) {
    // //       r.json().then((user) => onLogin(user));
    // //     } else {
    // //       r.json().then((err) => setErrors(err.errors));
    // //     }
    // //   });
    }
  
    return (
      <form onSubmit={handleSubmit}>
        {/* <div>
          <Label htmlFor="username">Username</Label>
          <Input
            type="text"
            id="username"
            autoComplete="off"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <Label htmlFor="password">Password</Label>
          <Input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="current-password"
          />
        </div>
        <div>
          <Label htmlFor="password">Password Confirmation</Label>
          <Input
            type="password"
            id="password_confirmation"
            value={passwordConfirmation}
            onChange={(e) => setPasswordConfirmation(e.target.value)}
            autoComplete="current-password"
          />
        </div>
        <div>
          <Label htmlFor="imageUrl">Profile Image</Label>
          <Input
            type="text"
            id="imageUrl"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
          />
        </div>
        <div>
          <Label htmlFor="bio">Bio</Label>
          <Textarea
            rows="3"
            id="bio"
            value={bio}
            onChange={(e) => setBio(e.target.value)}
          />
        </div>
        <div>
          <Button type="submit">{isLoading ? "Loading..." : "Sign Up"}</Button>
        </div>
        <div>
          {errors.map((err) => (
            <Error key={err}>{err}</Error>
          ))}
        </div> */}
      </form>
    )
}