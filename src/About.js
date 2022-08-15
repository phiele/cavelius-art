import sofia from "./assets/sofia.jpg";

export default function About() {
  return (
    <div className="about-layout">
      <div className="about-content">
        <h1>About Me</h1>
        <p>
          Hi, my name is Sofia and I'm a passionate graphic designer and artist.
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero repellat sint, illum impedit earum quod doloribus ut corporis tenetur natus consectetur velit, nesciunt saepe sed fugit, quidem consequuntur iure error. <br />
           <br />
          Sapiente illum dolorum labore nisi inventore, numquam praesentium expedita nesciunt magni placeat suscipit dolor et odit, atque possimus eum doloremque magnam laudantium esse. Velit, ipsam maiores a incidunt voluptatibus similique? <br />
           <br />
           <br />
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed dignissimos maiores ducimus quidem amet! In, dolorum ipsam, expedita distinctio sunt illum natus laboriosam aliquam ipsum inventore molestiae explicabo voluptatibus qui.
          Quo maxime ab facere minima! Fuga excepturi ab vero similique mollitia, sit veniam incidunt ipsa praesentium exercitationem quis consequuntur blanditiis nam amet est assumenda fugiat tenetur asperiores. Ratione, sed accusamus.
        </p>
      </div>
      <img
        src={sofia}
        className="about-img"
        alt="avatar"
      />
    </div>
  );
}
