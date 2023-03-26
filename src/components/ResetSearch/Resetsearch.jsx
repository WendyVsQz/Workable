
export function ResetSearch({searchValue, setSearchValue, handleChange}) {

    if (!searchValue) {
        console.log('Resetsearch: !option');
        const input = handleChange; 
        console.log('value is: ',input);
        return null;
    } 
    return (
        <button className="reset-search" onClick={() => setSearchValue('')}>
            reset search
        </button>
    );
}