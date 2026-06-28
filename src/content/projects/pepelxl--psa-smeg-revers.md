---
repo: "pepelxl/psa-smeg-revers"
name: "psa-smeg-revers"
description: "Рассматриваем  конструкцию магнитолы SMEG пятой линейки"
url: "https://github.com/pepelxl/psa-smeg-revers"
language: "C++"
languages: ["C++"]
languagePcts: [100]
stars: 10
forks: 1
openIssues: 0
closedIssues: 0
watchers: 4
contributors: 1
recentReleases: 0
createdAt: "2022-01-07T09:12:07Z"
lastCommitAt: "2026-06-28T09:17:10Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 78
undervaluedScore: 57
maintainers: ["pepelxl"]
openGraphImageUrl: "https://opengraph.githubassets.com/0b20a824687ef65d56ab3b894a52cdaee2f2694453f49a24e9bf66ebca90d2c7/pepelxl/psa-smeg-revers"
---

# psa-smeg-revers
Рассматриваем  конструкцию магнитолы SMEG.
<br>За основу взята прошивка 5.43.A.R2 и 6.4.A.R10  

Существуют три поколения магнитолы: SMEG, SMEG+, SMEGIV2. Все они заточены под свои модели автомобилей и сужается используемой темой в самой магнитоле. Существует предположение, что первые три версии OS обновляются до третьей для SMEG. 4, 5 обновляется до пятой для SMEG+. Шестая предназначена для SMEGIV2.  
Физически магнитолы имеют разную архитектуру:  
SMEG+ - PowerPC 2x400Mgz big-endian  
SMEGIV2 – ARM Cortex 1x800Mgz little-endian  

Папка SMEG_extract_harm содержит исходник и скомпилированную утилиту для извлечения тем из контейнера BIG_HARMONY.bin файлов обновления магнитолы.

Папка Load cal содержит утилиту для загрузки файла калибровки в магнитолу.

Ссылка на варианты кодировок для 6 оси https://drive.google.com/file/d/1EIV0orKCzKsZSx1PM2rB4obmCjci3UbF/view

Устройство содержит файловые разделы dosfs:  
  /SYSTEM_DATA  
  /SYSTEM_TMP_DATA  
  /USER_DATA  
  /USER_DATA_BACKUP  
  
  Backup содержит резервные копии файлов для востановления системы в случае неисправности основных файлов в USER_DATA.  
  /USER_DATA/user_data/Audio пользовательские данные настроек…
