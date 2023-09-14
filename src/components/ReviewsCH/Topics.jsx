

const Topics = ({topics}) => {

  return (
    <div className="course-review-topics">
        {topics.map(topic => <span key={topic}>{topic}</span>)}
    </div>
  )
}

export default Topics