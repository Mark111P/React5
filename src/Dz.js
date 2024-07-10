let cityInfo = 'Some info about City';

let mostFamous = 'This is the most famous thing in City';

let otherThings = [
    'Aaa111',
    'Bbb222',
    'Ccc333'
]

let photos = [
    'https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg',
    'https://h5p.org/sites/default/files/h5p/content/1209180/images/file-6113d5f8845dc.jpeg',
    'https://cdn.futura-sciences.com/sources/images/dossier/773/01-intro-773.jpg',
    'https://www.akamai.com/site/im-demo/perceptual-standard.jpg?imbypass=true',
    'https://images.ctfassets.net/hrltx12pl8hq/3Z1N8LpxtXNQhBD5EnIg8X/975e2497dc598bb64fde390592ae1133/spring-images-min.jpg'
]

let imgStyle = {width: '200px'}

export function CityInfo(){
    return(
        <>
            <div>{cityInfo}</div>
        </>
    )
}
export function FamousInCity(){
    return(
        <>
            <div>{mostFamous}</div>
        </>
    )
}
export function Other(props){
    let id = props.match.params.id;
    if (id >= 0 && id < otherThings.length){
        return(
            <div>{otherThings[id]}</div>
        )
    }
    return(
        <>
            {
                otherThings.map((val, i) => {
                    return(
                        <div key={i}>
                            <div>{val}</div>
                            <br></br>
                        </div>
                    );
                })
            }
        </>
    )
}
export function Photos(){
    return(
        <>
            {
                photos.map((val, i) => {
                    return(
                        <div key={i}>
                            <img style={imgStyle} src={val}></img>
                            <br></br><br></br>
                        </div>
                    );
                })
            }
        </>
    )
}