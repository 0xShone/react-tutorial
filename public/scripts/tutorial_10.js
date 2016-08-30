// tutorial_10.js
var CommentList = React.createClass({
  render: function() {
    var commentNodes =this.props.data.map(funciton (comment) {
      return (
        <Comment author={comment.author} key={comment.id}>
        {comment.text}
        </Comment>
      );
    });
    return (
      <div className="CommentList">
        {commentNodes}
      </div>
    );
  }
});
