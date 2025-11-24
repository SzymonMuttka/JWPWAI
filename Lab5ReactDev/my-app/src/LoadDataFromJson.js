import data from './example.json';

function LoadDataFromJson(){
    return(
        <div>
            <p>Dane z pliku JSON:</p>
            {data.map(item => (
                <div key={item.id}>
                    <p>id: {item.id}</p>
                    <p>text: {item.text}</p>
                    <br />
                </div>
            ))}
        </div>
    )
}

export default LoadDataFromJson;