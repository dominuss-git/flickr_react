import React, { useEffect } from "react";

import "./css/App.css";

import Item from "./Item.js";
import Pages from "./Pages.js";
import SortField from "./Sort_field.js";
import Modal from "./Modal.js";

import $ from "jquery";

function Data() {
  let photosets_array = [];
  let help_array = [];
  let [visible_item, setVisible_item] = React.useState([]);
  let [photos_array, setPhotos_array] = React.useState([]);
  let [last_page, setLastPage] = React.useState(1);

  const loadPhotosets = () => {
    return new Promise((resolve, reject) => {
      $.ajax({
        url: "https://www.flickr.com/services/rest",
        data: {
          method: "flickr.photosets.getList",
          api_key: "f6146b5aea320305af01030c6fc04c59",
          user_id: "48600090482@N01",
          nojsoncallback: 1,
          format: "json",
        },
      })
        .done((photosets) => {
          resolve(photosets);
        })
        .fail((error) => {
          reject(new Error(`Cant connect to Flickr\'s API ${error}`));
        });
    });
  };

  useEffect(() => {
    loadPhotosets()
      .then((list) => {
        for (let i in list.photosets.photoset) {
          photosets_array.push(
            new Promise((resolve, reject) => {
              $.ajax({
                url: "https://www.flickr.com/services/rest",
                data: {
                  method: "flickr.photosets.getPhotos",
                  api_key: "f6146b5aea320305af01030c6fc04c59",
                  user_id: "48600090482@N01",
                  photoset_id: list.photosets.photoset[i].id,
                  nojsoncallback: 1,
                  format: "json",
                },
              })
                .then((photoset) => {
                  resolve(photoset);
                })
                .fail((error) => {
                  reject(error);
                });
            })
          );
        }
        Promise.all(photosets_array).then((photoset) => {
          let data = [];

          list.photosets.photoset.map((photoset_info, index) => {
            help_array.push({
              title: photoset[index].photoset.title,
              photo: photoset[index].photoset.photo,
              description: photoset_info.description._content,
              click: false,
              index: index+1,
              modal: false
            });
          });

          for (let i = 0; i < 10; i += 1) {
            data[i] = help_array[i];
          }

          setPhotos_array((photos_array = help_array));
          setVisible_item((visible_item = data));
          // console.log(photos_array);
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const onToggle = (index) => {
    setPhotos_array(
      photos_array.map((data) => {
        if (data.index === index) {
          data.click = !data.click;
          console.log(index);
        }
        return data;
      })
    );
  };

  const onClick = (page) => {
    setLastPage((last_page = page));
    console.log(last_page);
    ShowItems();
  };

  const ShowItems = () => {
    let data = [];
    for (
      let i = (last_page - 1) * 10, j = 0;
      j < 10 && i < photos_array.length;
      j += 1, i += 1
    ) {
      data[j] = photos_array[i];
      console.log(i);
    }
    setVisible_item((visible_item = data));
    // console.log(visible_item);
  };

  const sort_by_name = () => {
    photos_array.sort((a, b) =>
      a.title.toLowerCase() > b.title.toLowerCase() ? 1 : -1
    );
    ShowItems();
  };

  const sort_by_input = (value) => {
    console.log(value);
    photos_array.sort((current, next) => {
      if (
        current.title.toLowerCase().indexOf(value.toLowerCase()) >
        next.title.toLowerCase().indexOf(value.toLowerCase())
      )
        return -1;
      if (
        current.title.toLowerCase().indexOf(value.toLowerCase()) <
        next.title.toLowerCase().indexOf(value.toLowerCase())
      )
        return 1;
      return 0;
    });

    ShowItems();
  }

  return (
    <div className="per-box">
      {photos_array.length < 20 ? "" : <SortField sort_by_input={sort_by_input} sort_by_name={sort_by_name}/>}
      {photos_array.length < 20 ? (
        <div className="lds-facebook">
          <div></div>
          <div></div>
          <div></div>
        </div>
      ) : (
        visible_item.map((data, index) => {
          return <Item key={data.index} data={data} onToggle={onToggle} />;
        })
      )}
      <Modal/>
      <Pages
        count={photos_array.length}
        last_page={last_page}
        onToggle={onClick}
      />
    </div>
  );
}

export default Data;
