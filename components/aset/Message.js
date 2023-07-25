const Message = (props) => {
    const { text, type } = props;

    return (
        <>
            {type === 'error' ? (
                <div className="flex flex-col items-center m-4 p-4 border-2 border-red-500 rounded">
                    <p>❌ {text}</p>
                </div>
            ) : (
                <div className="flex flex-col items-center m-4 p-4 border-2 border-green-500 rounded">
                    <p>✅ {text}</p>
                </div>
            )}
        </>
    )
}

export default Message;