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
        // src="https://scontent-ber1-1.xx.fbcdn.net/v/t31.18172-8/17632050_1034687336633098_8236640676789672849_o.jpg?stp=cp0_dst-jpg_e15_fr_q65&_nc_cat=102&ccb=1-7&_nc_sid=2d5d41&_nc_ohc=6uc9uujkD0oAX8AZnKq&_nc_ht=scontent-ber1-1.xx&oh=00_AT9kF9kfZiMjW1VldaG3DX2lq1OQZrMU8v_3S_zCwX_vjQ&oe=630FAD1D"
        src={sofia}
        className="about-img"
        alt="avatar"
      />
    </div>
  );
}
