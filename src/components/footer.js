import React from "react"

const Footer = () =>(<div>

<footer
          style={{
            marginTop: `2rem`,
          }}
        >
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.com">GatsbyJs</a>
        </footer>
</div>
)

export default Footer