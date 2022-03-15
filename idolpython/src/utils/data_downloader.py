from bing_image_downloader import downloader

downloader.download('Vu Ba Sang', limit=10,  output_dir='new_dataset', adult_filter_off=True, force_replace=False, timeout=60, verbose=True)