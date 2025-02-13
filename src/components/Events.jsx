export default function Events2() {
  return (
    <div>
      <div className="events-layers">
        <div className="events-box">
          <div className="events-text">
            <span className="events-title">
              Choose Your Fighter <br />
              Battle Royale Challenge
            </span>
            <span className="events-presented">Presented by:</span>
            <img
              src="/static/images/logoNoBackground.png"
              alt="Spams Logo"
              className="logo"
            />
            <span className="eventDateAndTime">
              Date: September 17th, 2024 | Time: 06:00
            </span>
            <p className="events-description">
              Join us for an epic showdown in the Choose Your Fighter arena!
              Select your favorite warrior, arm them with unique weapons, and
              battle it out in a series of intense, action-packed encounters.
              Customize your fighter, strategize your moves, and compete against
              other players to see who will emerge as the ultimate champion!
            </p>
          </div>
        </div>
        <div className="events-image"></div>
      </div>
      <div className="prizes">
        <div className="prize-item">
          <img
            src="/static/images/events/firstPlace.png"
            alt="Prize 1"
            className="prize-image"
          />
          <span className="events-span">First</span>
          <p className="prize-description">
            A high-end gaming console and exclusive game merchandise.
          </p>
        </div>
        <div className="prize-item">
          <img
            src="/static/images/events/secondPlace.png"
            alt="Prize 2"
            className="prize-image"
          />
          <span className="events-span">Second</span>
          <p className="prize-description">
            {" "}
            Gift cards and premium gaming accessories.
          </p>
        </div>
        <div className="prize-item">
          <img
            src="/static/images/events/thirdPlace.png"
            alt="Prize 3"
            className="prize-image"
          />
          <span className="events-span">Third</span>
          <p className="prize-description">
            Third Place: In-game currency and collectible items.
          </p>
        </div>
      </div>
      <div className="events-layers2">
        <div className="events-box2">
          <div className="events-text">
            <span className="events-title">PAST WINNERS</span>
          </div>
        </div>
        <div className="events-image2"></div>
      </div>
    </div>
  );
}
