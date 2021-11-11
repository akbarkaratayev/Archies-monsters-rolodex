import React from "react";
import MenuItem from "../menu-item/menu-item.component";
import "./directory.style.scss";

class Directory extends React.Component {
  constructor() {
    super();
    this.size = " ";

    this.state = {
      sections: [
        {
          title: "hats",
          imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
          id: 1,
          linkUrl: "shop/hats",
        },
        {
          title: "jackets",
          imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
          id: 2,
          linkUrl: "shop/jackets",
        },
        {
          title: "sneakers",
          imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
          id: 3,
          linkUrl: "shop/sneakers",
        },
        {
          title: "women's",
          imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
          id: 4,
          linkUrl: "shop/womens",
        },
        {
          title: "men's",
          imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
          id: 5,
          linkUrl: "shop/mens",
        },
      ],
    };
  }

  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map(({ id, ...otherSectionProps }, index) => {
          if (
            this.state.sections.length % 3 === 1 &&
            index === this.state.sections.length - 1
          ) {
            this.size = "super-large";
          } else if (
            this.state.sections.length % 3 === 2 &&
            (index === this.state.sections.length - 1 ||
              index === this.state.sections.length - 2)
          ) {
            this.size = "large";
          } else {
            this.size = " ";
          }
          return <MenuItem key={id} size = {this.size} {...otherSectionProps} />;
        })}
      </div>
    );
  }
}

export default Directory;
