import React from 'react'

class single extends React.Component {
  showFullRepos() {
    if (this.props.full) {
      return (
        <div class="m-single_repos">
          Pretend I have all the repos here ok
        </div>
      )
    }
  }
  render() {
    const item = this.props.item

    return (
      <section className="m-single">
        <figure>
          <img className="m-single_image" src={item.avatar_url} alt="Github Avatar: {item.login}"/>
          <h1 className="m-single_name">{item.login}</h1>
          <h4 className="m-single_link"><a href="{item.url}">Profile</a></h4>
          <div className="m-single_content l-container">
            <div className="m-single_description l-twoPart">
              {item.bio}
            </div>
            {this.showFullRepos()}
          </div>
        </figure>
      </section>
    )
  }
}

export default single