class TreasureMap {
    static getInitialClue() {
        return new Promise((resolve) => {
          setTimeout(() => {
            resolve("在古老的图书馆里找到了第一个线索...");
          }, 1000);
        });
      }
    
      static decodeAncientScript(clue) {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            if (!clue) {
              reject("没有线索可以解码!");
            }
            resolve("解码成功!宝藏在一座古老的神庙中...");
          }, 1500);
        });
      }
    
      static searchTemple(location) {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            const random = Math.random();
            if (random < 0.5) {
              reject("糟糕!遇到了神庙守卫!");
            }
            resolve("找到了一个神秘的箱子...");
          }, 2000);
        });
      }
    
      static openTreasureBox() {
        return new Promise((resolve) => {
          setTimeout(() => {
            resolve("恭喜!你找到了传说中的宝藏!");
          }, 1000);
        });
      }
}

// 使用async/await重写findTreasure函数
async function findTreasureWithAsync() {
   try {
    const initialClue = await TreasureMap.getInitialClue();
    document.getElementById('clue-text').textContent = initialClue;
    document.getElementById('clue-text').style.display = 'block';
    document.getElementById('continue-button').style.display = 'block';
  } catch (error) {
    console.error("任务失败:", error);
  }
}

// 处理图片点击事件
function onClueImageClick() {
  const clueImage = document.getElementById('clue-image');
  clueImage.classList.add('enlarged');
  document.getElementById('clue-text').textContent = "在古老的图书馆里找到了第一个线索";
  document.getElementById('clue-text').style.display = 'block';
  document.getElementById('continue-button').style.display = 'block';
}

// 处理按钮点击事件
function onContinueButtonClick() {
  document.getElementById('clue-text').style.display = 'none';
  document.getElementById('continue-button').style.display = 'none';
  document.getElementById('clue-image').classList.remove('enlarged');
  document.getElementById('treasure-map').style.display = 'none';
  document.getElementById('temple-map').style.display = 'block';
  document.getElementById('treasure-chest').style.display = 'block';
  
  // 解码线索并显示在页面上
  TreasureMap.decodeAncientScript("在古老的图书馆里找到了第一个线索...")
    .then(location => {
      document.getElementById('clue-text').textContent = location;
      document.getElementById('clue-text').style.display = 'block';
    })
    .catch(error => {
      console.error("任务失败:", error);
    });
}


// 处理宝箱点击事件
function onTreasureChestClick() {
    const treasureChest = document.getElementById('treasure-chest');
    treasureChest.classList.add('enlarged');
    document.getElementById('clue-text').textContent = "找到了一个神秘的箱子";
    document.getElementById('clue-text').style.display = 'block';
    document.getElementById('treasure-revealed-button').style.display = 'block';

    // 尝试搜索神庙
    TreasureMap.searchTemple("神庙位置")
        .then(message => {
            // 如果找到了箱子，则显示相应的信息
            document.getElementById('clue-text').textContent = message;
        })
        .catch(error => {
            // 如果遇到了守卫，则显示守卫的图片
            document.getElementById('clue-text').style.display = 'none';
            document.getElementById('treasure-revealed-button').style.display = 'none';
            document.getElementById('temple-map').style.display = 'none';
            document.getElementById('treasure-chest').classList.remove('enlarged');
            document.getElementById('temple-guard').style.display = 'block'; // 显示神庙守卫图片
        });
}

// 处理宝藏揭示按钮点击事件
function onTreasureRevealedButtonClick() {
  document.getElementById('treasure-chest').classList.remove('enlarged');
  document.getElementById('clue-text').style.display = 'none';
  document.getElementById('treasure-revealed-button').style.display = 'none';
  document.getElementById('temple-map').style.display = 'none';
  document.getElementById('treasure-found').style.display = 'block'; // 显示宝藏图片

  // 显示找到宝藏的文本
  document.getElementById('treasure-revealed').textContent = "恭喜你成功找到宝藏！";
  document.getElementById('treasure-revealed').style.display = 'block';
}

// 页面加载完成后绑定按钮点击事件
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('continue-button').addEventListener('click', onContinueButtonClick);
    document.getElementById('treasure-revealed-button').addEventListener('click', onTreasureRevealedButtonClick);
    document.getElementById('treasure-chest').addEventListener('click', onTreasureChestClick); // 绑定宝箱点击事件
});





 