import { useState, useCallback } from 'react';
import { useGameStore } from '../../runtime/stores/useGameStore';
import { missions } from '../../config/missions';
import { stamps } from '../../config/stamps';
import '../styles/map-home.css';

export function MapHome() {
  const currentMissionIndex = useGameStore((s) => s.currentMissionIndex);
  const collectedStampIds = useGameStore((s) => s.collectedStampIds);

  const [stampsPanelOpen, setStampsPanelOpen] = useState(false);
  const [toastVisible, setToastVisible] = useState(false);

  const mission = missions[currentMissionIndex];
  const totalMissions = missions.length;

  const openStampsPanel = useCallback(() => setStampsPanelOpen(true), []);
  const closeStampsPanel = useCallback(() => setStampsPanelOpen(false), []);

  const openWikiToast = useCallback(() => {
    setToastVisible(true);
    setTimeout(() => setToastVisible(false), 1500);
  }, []);

  return (
    <div className="app-container" id="app">
      {/* Map Layer */}
      <div className="map-layer" id="mapLayer" />

      {/* Mission Cards (Staggered) */}
      <div className="mission-area">
        <div className="mission-card reveal-up stagger-1">
          <div className="mission-card__chapter">
            当前任务 · {mission.chapter}
          </div>
          <div className="mission-card__title">{mission.title}</div>
          <div className="mission-card__target">
            目标地点：{mission.subtitle}
          </div>
          <div className="mission-progress">
            {Array.from({ length: totalMissions }, (_, i) => (
              <div
                key={i}
                className={`mission-progress__bar${i <= currentMissionIndex ? ' active' : ''}`}
              />
            ))}
          </div>
        </div>
        <div className="mission-card reveal-up stagger-2">
          <div className="label-mono" style={{ marginBottom: 'var(--space-xs)' }}>
            GPS: {mission.targetLat}°N, {mission.targetLng}°E
          </div>
          <div className="body-text" style={{ fontSize: '0.812rem' }}>
            沿石板路向东行进约 120 米，注意左侧马头墙轮廓。
          </div>
        </div>
      </div>

      {/* Direction Indicator */}
      <div className="direction-indicator reveal-up stagger-3">
        <div className="direction-arrow">↑</div>
        <div className="direction-label">向东 120m</div>
      </div>

      {/* User Location */}
      <div className="user-location reveal-up stagger-4">
        <div className="user-dot" />
      </div>

      {/* Bottom Nav */}
      <nav className="bottom-nav">
        <button className="nav-btn" onClick={openStampsPanel}>
          <div className="nav-btn__icon">印</div>
          <div className="nav-btn__label">印章</div>
        </button>
        <button className="nav-btn" onClick={openWikiToast}>
          <div className="nav-btn__icon">志</div>
          <div className="nav-btn__label">百科</div>
        </button>
      </nav>

      {/* Stamps Panel Overlay */}
      <div
        className={`overlay overlay--center${stampsPanelOpen ? ' active' : ''}`}
        onClick={(e) => {
          if (e.target === e.currentTarget) closeStampsPanel();
        }}
      >
        <div className="modal stamps-panel">
          <div className="modal__header">
            <div>
              <div className="stamps-panel__title">明经印收集进度</div>
              <div className="stamps-panel__subtitle">
                Archive Stamps Collection
              </div>
            </div>
            <button
              className="btn btn--small btn--ghost"
              onClick={closeStampsPanel}
            >
              关闭
            </button>
          </div>
          <div className="modal__body">
            <div className="stamp-grid">
              {stamps.map((stamp) => {
                const isEarned = collectedStampIds.includes(stamp.id);
                return (
                  <div className="stamp-slot" key={stamp.id}>
                    <div
                      className={`stamp${isEarned ? ' stamp--earned' : ' stamp--locked'}`}
                    >
                      <div className="stamp__inner">
                        {isEarned ? stamp.character : '???'}
                      </div>
                    </div>
                    <div
                      className={`stamp-slot__name${isEarned ? ' earned' : ''}`}
                    >
                      {isEarned ? stamp.name : '待解锁'}
                    </div>
                  </div>
                );
              })}
            </div>
            <div
              className="caption"
              style={{
                textAlign: 'center',
                marginTop: 'var(--space-lg)',
              }}
            >
              集齐三枚印章，揭晓西递秘档最终真相
            </div>
          </div>
        </div>
      </div>

      {/* Wiki Toast */}
      <div className={`toast${toastVisible ? ' active' : ''}`}>
        <div className="toast__text">百科系统</div>
        <div className="toast__sub">COMING SOON</div>
      </div>
    </div>
  );
}
