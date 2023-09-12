import profile from '../../assets/images/profile.png'

const Head = () => {
    return (
        <header className='flex justify-between my-5 py-2 border-b-2'>
            <h1 className='text-6xl '>Knowlodge</h1>
            <img src={profile} alt="" />
        </header>
    );
};

export default Head;