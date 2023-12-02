import React from 'react';

const contactStyle = {
  display: 'flex',
  justifyContent: 'space-around',
  alignItems: 'flex-start', // Adjusted alignment
  fontFamily: 'Arial, sans-serif',
  padding: '50px',
  backgroundImage: "url('https://lh5.googleusercontent.com/p/AF1QipNXjPHeepZUcSpAeyyeJsMzu1SQnqkee9VLq8qD=w480-h300-k-n')", // Replace with your image URL
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  height: 500,
  width: 999,
};

const formStyle = {
  width: '40%',
};

const formContainerStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: '15px',
};

const labelStyle = {
  fontSize: '1rem',
  color: '#c70000', // KFC red color
  fontWeight: 'bold', // Increased emphasis
};

const inputStyle = {
  padding: '10px',
  border: '1px solid #ccc',
  borderRadius: '5px',
};

const buttonStyle = {
  padding: '10px 20px',
  backgroundColor: '#c70000',
  color: '#fff',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
  transition: 'background-color 0.3s ease',
};

const contactInfoStyle = {
  width: '30%',
};

const titleStyle = {
  color: '#c70000',
};

const paragraphStyle = {
  color: 'black',
};

const listStyle = {
  listStyle: 'none',
  padding: '0',
  margin: '0',
  display: 'flex',
  gap: '10px',
};

const listItemStyle = {
  width: '30px',
};

const imgStyle = {
  width: '50px', // Adjusted image size
  height: 'auto',
};

const socialMediaStyle = {
  width: '30%',
};

function Contact() {
  return (
    <div style={contactStyle} className="contact">
      <div style={formStyle} className="contact-form">
        <form action="#" style={formContainerStyle}>
          <label htmlFor="name" style={labelStyle}>
            Name:
          </label>
          <input type="text" id="name" name="name" required style={inputStyle} />

          <label htmlFor="email" style={labelStyle}>
            Email:
          </label>
          <input type="email" id="email" name="email" required style={inputStyle} />

          <label htmlFor="message" style={labelStyle}>
            Message:
          </label>
          <textarea id="message" name="message" rows="5" required style={inputStyle}></textarea>

          <button type="submit" style={buttonStyle}>
            Send
          </button>
        </form>
      </div>

      <div style={contactInfoStyle} className="contact-info">
        <h3 style={titleStyle}>KFC Headquarters</h3>
        <p style={paragraphStyle}>
          123 Main Street
          <br />
          Louisville, KY 40202
        </p>
        <p style={paragraphStyle}>Phone: (555) 555-5555</p>
        <p style={paragraphStyle}>Email: info@kfc.com</p>
      </div>

      <div style={socialMediaStyle} className="social-media">
        <h3 style={titleStyle}>Follow Us</h3>
        <ul style={listStyle}>
          <li style={listItemStyle}>
            <a href="#">
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAb1BMVEU8Wpn////y9PgiSZE5WJhQaaLX3OgoTZLt7/QwUpU0VJahrMiGlLo2VpceR5B9jbba3ulzhbGLmb1FYZ3k5+/5+vyUocJZcKV+jrZkeaqgq8hUbKPL0eCYpMRKZZ+qtM66wtfByNtgdqgAO4uyu9LCnVTvAAAETElEQVR4nO3d63aiMBSGYTARDJooise2Vh3v/xrH1pHajmO2xBB25nv/zK9Z8ixQqjmQpLGXhD4A7/1/wh7/7giz6cyICNouJjeFWV8UMokhqcSy+lu4MDr0kT0xaYY/heM89EE9OTH9LlzEBjwR36+FmQl9PB4y1ZWwH9N78JJefwkzEfpovHQ+iZ/CaRH6YLykNrVwFsd98GdyXQtj/JxJPu78F2Evzrfh6YYBIfsg5B+E/IOQfxDyD0L+Qcg/CPkHIf8g7EBaF+d0obXUMnnsR8EuC2WhcmGSZTkeTU+NVuOyXL9sE2WMEHmeK1Vou7azQpWb/vSYDdJbzXvV5HV/3EzLFyuxk0KpRLJ4nd/E/cz6U30HhTLPv41Q32/ETijz2Y7MYyg8+faP+NgJdX58zMdNKErapwtXoTQPn0BeQq0rC4a5sOg/foWyEqpDIx8fYbFsCOQilLOmQC7C/OdsydiEJmsM5CFUb82BLIRy6wBkITT0r0o8hcXIBchBaJp/jvIQFgsnIAOh4ynsvrBYuQG7LxROH6QMhG73Qg5CNbQA2AtFo+/1jIQO35qYCJXjzbD7wnzvLOz4uIWg3+7nk91wMVqtxufqf62DT4Hfh1Te8SBy9TFeWPdn1NS+ljCoUJc04Eao5otBggppX+57W+XyImGFlHG0XuG24iyoMKf8AvXiuKQuqFDcHqX/1tF12WdYIWGo4sG5JTdeJKjQDnRfFRlSKAu78M15VWTQc0j4u/vgvCoy6DkkfP11X14eVNi3AufuR9VxYRW9cBL9VRq/MIPQHoQ+gxBCWhD6DEIIaUHoMwghpAWhzyCEkBaEPotEqO7shGvfoTn7ZdlMN/wqWfXWG/w7q3B+5z9/NO8HH8d3n9Z1P/tVzFxIOGrmQsIvxsyF++iF7/aJKMyFhI1zmQtL+1QU5kLC1sDMhYSD5i0cRC+k/GHOW0i4HTIXDgnzMnkLrdPY2QvXhBlTvIWUKWG8hZRjZi2k3A55C18pv1OxFu4ok/hZCzfRC1eUafyshcvohaS1QpyFtAnEnIW0CcSchaTbIWvhkbSmjbOQttqEs7CMXmgfWWtDWGz8CWnjwyHHgI3jGDBtSRTG8X0GIYS0IPQZhBDSgtBnEEJIC0KfQQghLQh9BiGEtCD0GYQQ0oLQZxBCSAtCn0EIIS0IfQYhhLQg9BmEENKC0GcQQkgLQp9BCCEtCH0GIYS0IPQZhBDSgtBnEEJIC0KfQQghLQh9BiGEtCD0GYQQ0qqFpN3dnlsrwvMDaz+FW+entj784m0I9boWLpyeYN6kVoTnrUc+hZPWL9NWhGZQC9Nl25dpG0Jdpl/CyjzluOm1ITyfwj/CdNjyddqC0OzSa2E6bZfoX2gu+//UO+G8G8o+fc/Kt1BfzuCVMK3WRsm2PnF8CqVWpvx6ysv1bkbV5nDv4TfPzHUXpXsV6+H1U2zsr8Q9CPkXv/A3qY9ir7IAjfkAAAAASUVORK5CYII="
                alt="Facebook"
                style={imgStyle}
              />
            </a>
          </li>
          <li style={listItemStyle}>
            <a href="#">
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANwAAAC1CAMAAAADf2EhAAAAYFBMVEUdm/D////7/f8hnfAtovEpoPF+xvb4/P/Y7vx3w/Y4p/Lk8/3r9v5ct/Q8qfJovPWt2/ry+f5QsvPD5Pul1/lIrvO13vqc0/hvv/WQzviGyvfW7fzG5vvP6vw7qPK54Pq1l7ynAAAI5klEQVR4nN2daWOqOhCGZVP2VQTUHv//v7xotQbIMlkGwn0/ndNa7dOE2ZJMDs7/WIetf4G5TmFzHqIo6vvj0F1uJ533sgouLKPWO0zk5UUXqr6fPXA/1/zAUBw9XJW3tASu6v6xyN58V4nxS9+T2Qq4WxTw0V7KfmDvdhra978sgEt6T0wGxnPL+DC8/705XHWFoj1VpPx3c8vxwfWS9/+2hmtiCbRR/pljWtyyfQ3w5/9zuFPirKhTJIf2VM36Davu/Ye6f74yh+v+CQbepH6Yxp87eA31vfqPUar/vjaDO/mHWisokNEDYiMp8ob5O6Vd+/324+/LM7hu/GaBTvX+LBlLMlVBPnjpOSO/9x24Gdw4cKOua6C5R2W0UdlneoVdPf2ORzj7KVz5+4JyBTYFUzKnC8veX3zjSHzIFO7zV7igw2myHQ5ttgQbFVcsuPDzEu/h4GrQZWPIu5OfMoE7Ml5kXCUS28xcTOAItxMAo1Ql/ajbSb7qafhCwoXk63w8ukqQ3ihrHoCQcN3klQHazCyQ2Px5ykfCZdPXBkhW5YLEtrQTJNzctnooHqGimnB9BbOQsypPBFyy/IEzApxWZMJhm47bTxScyZF7UH5kEaJqK8SxlBP7V53bV1ZHwFEda286R8hon6Kt9pvkJV32/Pv56QSOHhHVZvO7GwrbZwjc2/DOfV7WhYBj/E1z5ZooTRhuwH8F+qf7QISbr+eJgGtZP2vQJVCMlrayNGm6qJ48y785KQHHLtVcleq9NF3Ns/ntMqFvqzkcx/+YevBcJB83k/82LzC4Q2wmFruvwuZ93AIQ7uANJqamdooK0l9gBYUbp6YBq7nKrPyGVSCD8qug0x08HCc3ExFUAVzBV8xiL1Cd8BOMsgGcOCnNwcNK5BhsJFwP+eFWJ0GXXPRQ0DTQFwXOS0WVo6gUF+ywSNEEKQ9N3FUknrC93CK55ierDOVq0SZaQe9XvlSZgaNaJWLBqsT+ipK9cApEfBXyPh2pwPCrjGIK2KU9oQpZwwkyx4qiJi7MoixENXWNkymcCsNTjJRzUk6X90P1RcJyosEFjMiJsRACVzyAYzI0OJ/xgRM4xcC2AM7ObeEAsTNd/waI7UQLLQMQnEbYnounJ1qq6oHgtOr4Xi3YGYlQHXqLYdVmWzV0g4j82LDN59kICE0wOANLMEE23Okf1hjAoAo2LU3Ff0E9PJbVQIyK7EtQuJO5JV0/u5bhZAyx6kMwa+nAszqgvLjuh/IevsJaLEcH83NPoa1Y5zVWmSEGwyXrlLxNKgfDmZ6YK6heQrDgEJ0tkjIKBAvOrcXvZ5V6CTinUg2gN9KRBsGCcxL88qlJsfZcfOEq0t+GuzKZrM2vX7iyJQsRIdbmMwyx6oxfuMvoL7rvrpN0R88dK5P8wr1idv/4V6+r8IpVpsXaCPSF+1Ty8+P998XugLXn07BYoSUBR1Qtvfpa3sZQ974Po8kKUAi40/xn/LbehzePxHDrrMZjqAPA7WOYKGIuqAl37e1AzJoiAYe8NoimgFlvI+CkF3ksEdNYknAr7TozLlZOMM0KVtgmgiH2mTESbqcPHXuNgoSrdhJuTcUMvmbJ6n5CZUKsAsocbn91rwP36MMEzt1HoDwVZ0/FtIaCuw0GRWwXPodLFU9ubyjOIzevfu2uHstOCZZwWOe/8HSDw+3uqWMt8FDh3B0VvZ5iB5YUOLyTwDji7u9ZltN3lbMG3ON9S7jTniYmvwMIZSEk3JGz4x8Zpq3y7Cf14c9K+hLWbvwBa9WRB4e7G9mgBHsh6XDuPioOvmCbLqPvl4u52dqYuB6cDbePmSnawcru2Gb/Aha7YCmEcxrbMwRhHyher73E7qURX9hZgdtI0O61VZE5EXZJDC0ePPF5BmELyMbWOBrQNU/c39I9K/UyRBfgmBSkeafbWFiKFvoBIJzz7KBi2+yE9EeCt10NO3p3u22UQ05/SfSUTcqjPXSgxlZsuC7Poq68PJqmKbtrb9OwHQ4t6NgeGy6x2YHDOpJxpqXF/hs2cDw4i0spwHPqHDh7V+sgPk4At0qHDxV50DPcPDhbl3wENS8YnKVDxzo4LQnnWhkyw5sb8iMUrD6bOsrhrQ0F4ZeF9UuJlgkCuNQ6mwK2JmI46yamL9MYT5gVWFaclWrrLoSz67wZb9eJApyTWuQPpCYlKFm16LyZZO9lSCZ+s8VkylhKKJwtdLFsOzVYDSWx4TSd/DUD0NKeBTaTt4VNC07peiCzkvMCUnCOc952e0qu0L9Qpm655dQMeFsPDcA57nk7q6l0u4DcLWbVcaNiplr3fdkr2pLjFo+e4g1W8vfPpdfVwzHVu8fk4cZn71GsOny5anNzFbhRp+a42oJdrNxgWRHuqarpoixHN6CLC2lWgftI4x45gHSudtKGq3C3wHly/UHNwqld2wjW/LKdNeGwtxjpsenBYe8v0r2OSwPuhL0zTPuqMXW4B3ZVTP+SOFW4EH1TkYH7gNTgUvzsoFZurq8HV13xQ8vCxB1c8nCrJD1mrjmShQvBN5trKDB0q58UnPtYZW9irlIv0YS7rbSvjdacHxdutQ2XZq5ugsO5P8NqmWlu8npXIVx4LlYs6PXGpqQILnkM6+6y9A3ffXpwfm7pbJafwns59PXqFdjC7PWST7i0eLYhbtssK7Isq/N4ozWB2PyFvM9pebdh1Vv9oiY+3JiZbX3AuEa5A/ttUNJNt5vEUrtLpOHG+GOzUx/BYPoW3gXc+Ohtsv7mHU3bSCqc4zSr4wWIaAsnfl91cnqR5j2LcnDjs7dGwvaSP2COGhVutJzDGgtw7RnLjHDhRr9XIj98Xo/i10BwoxLE9dP6jBCNyMCNWdwdJfOOr0bvJ1eEG3V69Gb52usq0/EjUbI6jp+hsNrLOlzDvxSkzJDoJ+P18bHSc0YKWiAKz73iCAb1dQuwp2TqllXTFbmMi4+z6yU0V8ySlnQ53Q0vQ5QJGOM6GsqfjcbrK+X1uTRsym64Rv2rOFFnWVH00XE4X+7hvCazmQxs1bBX/2u4/wDcBXmSexyxcwAAAABJRU5ErkJggg=="
                alt="Twitter"
                style={imgStyle}
              />
            </a>
          </li>
          <li style={listItemStyle}>
            <a href="#">
              <img
                src="data:image/jpeg;base64,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"
                alt="Instagram"
                style={imgStyle}
              />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Contact;
