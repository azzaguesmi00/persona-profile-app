import React, { Component } from 'react'

export default class Profile extends Component {

    constructor(props) {
		super(props);
		this.profile = {
			fullName: "Student",
			bio: "web dev js student",
			imgSrc:
				"https://static.vecteezy.com/system/resources/previews/002/002/403/non_2x/man-with-beard-avatar-character-isolated-icon-free-vector.jpg",
			profession: "web developer JS",
		};
		this.state = { count: 0 };
	}
    componentDidMount() {
		setInterval(() => {
			this.setState((prevState) => ({
				count: prevState.count + 1,
			}));
		}, 1000);
	}

	componentWillUnmount() {
		clearInterval(this.state);
	}

  render() {
    return (
      <div>
        <h2>This is my profile</h2>
				<h3>{this.profile.fullName}</h3>
				<h3>Counter :{this.state.count}</h3>
				<img width={"400px"} src={this.profile.imgSrc} alt='myprofile' />
				<h3>{this.profile.bio}</h3>
				<h3>{this.profile.profession}</h3>

      </div>
    )
  }
}
