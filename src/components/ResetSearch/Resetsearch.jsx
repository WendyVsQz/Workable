
export function ResetSearch({searchValue, setSearchValue, handleChange}) {

    if (!searchValue) {
        console.log('Resetsearch: !option');
        console.log('value is: ',handleChange);
        return null;
    } 
    return (
        <button className="reset-search" onClick={() => setSearchValue('')}>
            reset search
        </button>
    );
}