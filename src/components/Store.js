import Dexie from 'dexie';
import { useEffect, useState } from 'react';

const db = new Dexie('MumkeyJonesArchive');
db.version(1).stores({
  episodes: '&id, currentTime',
});

class WatchHistoryManager {
  constructor(db) {
    this.episodes = db.episodes;
  }

  async save(episode_id, progress) {
    await this.episodes.put({ id: episode_id, currentTime: progress });
  }

  async remove(episode_id) {
    await this.episodes.delete(episode_id);
  }

  async get(episode_id) {
    return await this.episodes.get(episode_id);
  }

  async all() {
    return await db.episodes.toArray();
  }
}

const watchHistoryManager = new WatchHistoryManager(db);

function useWatchHistory() {
  const [watchHistory, setWatchHistory] = useState([]);

  useEffect(() => {
    watchHistoryManager.all().then((episodes) => setWatchHistory(episodes));
  });

  return watchHistory;
}

export { db, watchHistoryManager, useWatchHistory };
