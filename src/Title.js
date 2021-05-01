const Title = (arg) => {
    return(
        <section class="page-title">
            <div class="auto-container">
                <h1>{arg.data}</h1>

                <div class="search-boxed">
                    <div class="search-box">
                        <form method="post" action="contact.html">
                            <div class="form-group">
                                <input type="search" name="search-field" value="" placeholder="What do you want to learn?" required="" />
                                <button type="submit"><span class="icon fa fa-search"></span></button>
                            </div>
                        </form>
                    </div>
                </div>
                
            </div>
        </section>
    );
}

export default Title;