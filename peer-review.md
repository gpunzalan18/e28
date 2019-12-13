## P3 Peer Review

+ Reviewer's name: Grace Punzalan
+ Reviwee's name: Norcius Noel
+ URL to reviewee's Github repo: https://github.com/nnoel2626/e28

### Are you able to produce any errors or unexpected results?
- When redirected to Product Page, I saw the following error message on the console:
    ```
    vue.runtime.esm.js:1888 TypeError: Cannot read property 'model' of null
        at a.ct (ProductPage.vue?ba3a:1)
        at a.t._render (vue.runtime.esm.js:3542)
        at a.r (vue.runtime.esm.js:4060)
        at nr.get (vue.runtime.esm.js:4473)
        at new nr (vue.runtime.esm.js:4462)
        at An (vue.runtime.esm.js:4067)
        at a.Tr.$mount (vue.runtime.esm.js:8409)
        at init (vue.runtime.esm.js:3118)
        at n (vue.runtime.esm.js:3301)
        at h (vue.runtime.esm.js:5972)
    ```
    In `ProductPage.vue`, try to add a `v-if`to check if the product is defined before it gets rendered. 

- In term of using localStorage, there are 2 components that use it. 

    1. Adding to cart works perfectly. 
    
    2. However, Adding a product to localStorage does not work.  

    From `AddProductPage.vue`, `product` and `formData` are both declared as `[]`. When a new product is sumitted, The `requestAdd` function is triggerded. 

    ```js
        requestAdd: function() {
			let formData = {
				building: this.formData.building,
				room: this.formData.room,
				make: this.formData.make,
				model: this.formData.model,
				mic_type: this.formData.mic_type,
				group: this.formData.group,
				channel: this.formData.channel,
				serial_number: this.formData.serial_number,
				freq_band: this.formData.freq_band,
				freq_range: this.formData.freq_range,
				assigned_frequency: this.formData.assigned_frequency,
				comments: this.formData.comments
			}
			this.$emit("addRecord", formData);
			this.formData.push(this.product),
			localStorage.setItem("product", JSON.stringify(this.formData))
			this.addAlert = true;
			setTimeout(() => (this.addAlert = false), 3000);
			this.formData = [];
			
		}
    ```

    The student is pushing `this.product` to `this.formData` but at this point, both are equalt to `[]`.  As a result,   the `product` key in localStorage gets the value `[[]]`. 
    
    Addtionally, the local variable `formData` is emitted but I couldn't find any other reference to the `addRecord` event. 


### Were there any parts of the interface that you found confusing or unclear?
- Login and Register buttons are clickable but nothing happens when I click on them. It would have been helpful if they are grayed out to indicate that the buttons are disabled. 

- At first glance, the actual content is actually confusing because they all look the same.

- In `ShowFeatured.vue`, `featuredProducts` is declared as a computed property. However, this is not being used. The component actually renders a display for each product in `products` (not `featuredProducts`):
    ```html
    <div class="container">
      <div class="card text-left" v-for="product in products" :key="product.id">
        <div class="card-body">
          <h5 class="card-title">{{ product.model }}</h5>
          <h6 class="card-subtitle mb-2 text-muted">{{ product.building }}</h6>
          <p class="card-text">{{ product.room }}</p>
        </div>
      </div>
    </div>
    ```
- P3 README file indicates that searching for products by building location is fully functional. I did see some code that seemed related to this but the functionality is not available in production.  

### Are there aspects of the code that you feel were not self-evident and would benefit from comments?
- N/A

### Are there any parts of the code that you found interesting or taught you something new?
- In terms of styling, I actually used [Bootstrap](https://getbootstrap.com/docs/3.4/) for my project. But looking through the student's project, I learned that [BootstrapVue](https://bootstrap-vue.js.org/) exists. I will definitely check it out sometime!

### Are there any best practices discussed in course material that you feel were not addressed in the code?
- In `AddProductPage.vue`, there's about 175 lines of code in the `template` that displays form input boxes and their corresponding labels. Using a custom input component could make the code more organized and easier to follow. 
- There is also a good amount of commented out code that needs to be cleaned up. Here is an example from `ProductPage.vue`:
    ```css
    div.card-header {
        /* display: flex;
        width: 100%;
        height: 40px;
        max-height: 50px;
        align-items: left;
        justify-content: space-between;
        flex: 1 0 auto; */
    }
    h4.card-header-title {
        /* padding-left: 15px; */
        margin: 0;
        color: rgb(13, 100, 150);
        /* line-height: 45px; */
        font-weight: 200;
    }
    h5.card-header-title {
        /* padding-left: 25px; */
        margin: 0;
        color: white;
        /* line-height: 65px; */
        font-weight: 200;
    }
    ```

### Do you have any additional comments not covered in the above questions?
- P3 code in github is not the same as in production. When P4 code was initialized, part of the commit touched P3 files. Here is [commit reference](https://github.com/nnoel2626/e28/commit/50a69e607df0651264bcc94f6a3b80497c47052f). 
